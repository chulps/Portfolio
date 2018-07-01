import React from "react";
import  { Modal } from 'reactstrap';
import axios from "axios";
import FileBase64 from 'react-file-base64';
import "./AdminProfilePage.css";
import { SocialIcon } from 'react-social-icons';


class AdminProfilePage extends React.Component {
    constructor(props){
        super(props)

 
    this.state={
       projects:[],
       projectName:"",
       description:"",
       domainLink:"",
       files: [],
       resume:[],
       updatedFile:[],
       action:"",
       toMap:[],
       colorPro:"rgb(0, 123, 255)",
       updateExternalLink:"",
       addExternalLink:""
    };

        this.componentDidMount = this.componentDidMount.bind(this);
        
        
    };
  

componentDidMount(){

    axios.get("/api/resume")
    .then(response=>{
        this.setState({
            resume:response.data
        });
    });

    axios.get("/api/projects")
    .then((response) =>{
        this.setState({
            toMap:response.data,
            projects:response.data,
            edminElement:"projects",
            
        });
    });

    axios.get("/api/snippets")
    .then((response) =>{
        this.setState({
            snippets:response.data,
        });
    });
    
    axios.get("/api/visitor/data")
    .then(response=>{
        this.setState({
            visitorsData:response.data
        });
     });
};


///====UPDATE=====================================================
handleClickSignOut = () =>{
    const storageUsername = localStorage.removeItem("user_name");
    const storageToken = localStorage.removeItem("user_token");
    window.location.reload(true)
};
//==================================================================





 



///**************************************************** */

//========= load Project, snippet or resume . Loads content on dashboard
loadProjects = () =>{
    this.setState({
        toMap:this.state.projects,
        edminElement:"projects",
        colorPro:"rgb(0, 123, 255)",
        colorSnip:"black",
        colorRes:"black"
    });
};
loadSnippets = () =>{
    this.setState({
        toMap:this.state.snippets,
        edminElement:"snippets",
        colorSnip:"rgb(0, 123, 255)",
        colorPro:"black",
        colorRes:"black"
    });
};
loadResume = () =>{
    this.setState({
        toMap:this.state.resume,
        edminElement:"resume",
        colorSnip:"black",
        colorPro:"black",
        colorRes:"rgb(0, 123, 255)"
    });
};
//==========

//========== To close Modal 
toggle = ()=>{
    this.setState({
        toggle:false,
        add:false,
        edit:false
    });
};
//==========

//========== Based on action knows what to load in Modal as Input Also sets 
editProjectModalToggle = (id, name, domain, descriptions, externalLinks) =>{
    console.log("CHEK CO",externalLinks)
    this.setState({
        toggle:true,
        edit:true,
        editId:id,
        projectName:name,
        domainLink:domain,
        description:descriptions,
        externalLinks:externalLinks,
    });
};

addProjectModalToggle = (check) =>{
    this.setState({
        toggle:true,
        action:"projects",
        add:true,
        projectName:"",
        description:"",
        domainLink:"",
   });
};
addSnippetModalToggle = () =>{
    this.setState({
        toggle:true,
        action:"snippets",
        add:true,
        projectName:"",
        description:"",
        domainLink:"",   
   });
};
addResumeModalToggle = () =>{
    this.setState({
        toggle:!this.state.toggle,
        action:"resume",
        add:true,
   });
};
//========== 
//==========

//========== handle inputs  
handleInputGetFile = (file)=> {
    this.setState({
        files: file[0].base64
    });
};
handleInputProjectName = (e) =>{
    this.setState({
        projectName:e.target.value
    });
};
handleInputDescription = (e) =>{
    this.setState({
        description:e.target.value
    });
};
handleInputDomainLink = (e) =>{
    this.setState({
        domainLink:e.target.value
    });
};
handleInputAddExternalLink = (e) =>{
    this.setState({
        addExternalLink:e.target.value,     
    })
}
//========== 


addExternalLinksBtn = () =>{
    axios.post(`/api/add/${this.state.edminElement}/externalLinks/` + this.state.editId,
    {   
        externalLink:this.state.addExternalLink
    }).then(response=>{
        this.setState({
           toMap:response.data
        });
    });
    this.setState({
        addExternalLink:"",
    });  
};


//========== Submits New Project,Snippet,Resume  
handleInputSubmit = () =>{
    if(this.state.edit){
        axios.post(`/api/update/${this.state.edminElement}/` + this.state.editId,
        {
            projectName:this.state.projectName,
            description:this.state.description,
            domainLink:this.state.domainLink,
            img:this.state.files
        }).then((response) =>{
             this.setState({
                 [this.state.edminElement]:response.data,
                 toMap:response.data
             })
            }).catch((error) =>{
                if(error) throw error;
            });
        this.setState({
            files: [],
        })
        
    }else{
        if (this.state.action === "resume"){
            axios.post("/uploadResume",{
                Resume:this.state.files
            }).then(response=>{
                this.setState({
                    resume:response.data
                })
            }).catch((error)=>{
                if(error) throw error
            });
      }else{
      axios.post(`/api/create/${this.state.action}`, {
          projectName:this.state.projectName,
          description:this.state.description,
          domainLink:this.state.domainLink,
          img:this.state.files,
          externalLink:this.state.addExternalLink,
      }).then((response) =>{
          this.setState({
            [this.state.action]:response.data,
            toMap:response.data
          })
      }).catch((error)=>{
          if (error) throw error
      });
    }

    //empty input filds
    this.setState({
        projectName:"",
        description:"",
        domainLink:"",
        externalLink:"",
        files: [],
        resume:[],
        edit:false,
    });
  }
};
//========

//======= Handle input Deletes
handleInputDelete = (id)=>{
    axios.post(`/api/delete/${this.state.edminElement}`,{
        id:id
    }).then((response)=>{
        this.setState({
           [this.state.edminElement]:response.data,
           toMap:response.data,
        })
    }).catch((error)=>{
        if(error) throw error
    });
    this.setState({ 
    });
};
deleteImage = (id,img)=>{
    axios.post(`/api/deleteimage/${this.state.edminElement}`,{
        id:id,
        img:img
    }).then((response)=>{
        this.setState({
            toMap:response.data
        });
    });
};
deleteExternalLinks = (link) =>{
    console.log("CHECK:LINK",link)
    axios.post(`/api/delete/${this.state.edminElement}/externalLinks/` + this.state.editId,{
        id:this.state.editId,
        externalLink:link
    }).then(response=>{
        this.setState({
            toMap:response.data
        });
    });
 
};
deleteResume = (id) =>{
    axios.post("/api/delete/resume/",{
        id:id
    }).then(response=>{
        this.setState({
            resume:response.data
        });
    }).catch(error=>{
        if(error) throw error
    })
}
//========

//========  Modal Content - Input Form Inside Modal  
modalContent = () =>{
    // action: is left side bar - edim page
 
    if(this.state.action === "projects" && this.state.add){
        return this.addNewProOrSnip();
    }else if(this.state.action === "snippets"  && this.state.add ){
        return this.addNewProOrSnip();
    }else if(this.state.add && this.state.action === "resume"){
        return this.addNewResume()
    } 
    else if(this.state.edminElement === "projects" && this.state.edit){
        return this.editProOrSnip()
    }else if (this.state.edminElement === "snippets" && this.state.edit){
        return  this.editProOrSnip()
    }
};
//======== 

//============ Input Form jsx for new Projects or Snippet  
addNewProOrSnip = () =>{
    return(
        <div className="col-12">
            <h3 className="text-center">Add {this.state.action}</h3>
            <div className="row">
                <div className="col-12 p-3">
                    <input  className="inputName mb-2 w-100 px-2" type="text" onChange={ this.handleInputProjectName } value={ this.state.projectName } placeholder="Project Name"/> 
                    <input  className="inputName mb-2 w-100 px-2" type="text" onChange={ this.handleInputDomainLink } value={ this.state.domainLink } placeholder="Domain Link"/>
                    <input  className="inputName mb-2 w-100 px-2" type="text" onChange={ this.handleInputAddExternalLink} value={ this.state.externalLinkAddInput} placeholder="External Link"/>
                    <textarea clasName="textarea-field w-100 px-2" style={{width:"100%"}} type="text" onChange={ this.handleInputDescription } value={ this.state.description } placeholder="description"></textarea>
                </div>
                <div className="col-12">
                    <FileBase64 multiple={ true } onDone={ this.handleInputGetFile.bind(this)} />
                </div>
                <div className="col-12 p-3">
                    <button onClick={this.handleInputSubmit} className="btn btn-primary col-12 text-center" type="submit" name="action">Submit</button> 
                </div>
            </div>
        </div>
        )    
 };
 //===========

//============ Edit 
editProOrSnip = () =>{
    return(
        this.state.toMap.map(content=>{
            if(this.state.editId === content._id){
                return(
                    <div className="col-12">
                        <h3 className="text-center">Edit {this.state.edminElement}</h3>
                        <div class="row col-12">
                            {content.img.map(image=>{
                                return(
                                    <div class="col-6">
                                        <span onClick={()=> this.deleteImage(this.state.editId, image)}>X</span>
                                        <img style={{objectFit:'contain',maxHeight:"120px"}}  className="card-img-top mx-auto" src={image}/>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="row">
                            <div className="col-12 p-3">
                                <input  className="inputName mb-2 w-100 px-2" type="text" onChange={ this.handleInputProjectName } value={ this.state.projectName } placeholder="Name"/> 
                                <input  className="inputName mb-2 w-100 px-2" type="text" onChange={ this.handleInputDomainLink } value={ this.state.domainLink } placeholder="domain Link"/>
                                <textarea clasName="textarea-field w-100 px-2" style={{width:"100%"}} type="text" onChange={ this.handleInputDescription } value={ this.state.description } placeholder="description"></textarea>
                                { content.externalLink.map(links=>{
                                 
                                    return(
                                        <div>
                                            <SocialIcon className="social-icons mx-3" id="socialicon-Insta" url={`https://${links}`} /> 
                                            <button onClick={() => this.deleteExternalLinks(links)} className="col-3 btn btn-primary">Delete</button>
                                        </div>
                                    )
                                }) }
                                <div className="">
                                    <input  onChange={ this.handleInputAddExternalLink } value={ this.state.addExternalLink } className="inputName mb-2 w-100 px-2 col-9" placeholder="External Links"/>
                                    <button onClick={this.addExternalLinksBtn} className="col-3 btn btn-primary">Add</button>
                                </div>
                            </div>
                            <div className="col-12">
                                <FileBase64 multiple={ true } onDone={ this.handleInputGetFile.bind(this)} />
                            </div>
                            <div className="col-12 p-3">
                                <button onClick={this.handleInputSubmit} className="btn btn-primary col-12 text-center" type="submit" name="action">Submit</button> 
                            </div>
                        </div>
                    </div>
                )
            }
        })
    )
};

//============ Add new Resume Input form 
addNewResume = () =>{
    return(
        <div className="row p-3">
            <div >
            <button onClick={this.handleInputSubmit} className="btn btn-primary" type="submit"name="action">Submit</button>
            </div>
            <div>
                <FileBase64 multiple={ true }  onDone={ this.handleInputGetFile.bind(this)}/> 
            </div>
        </div>
       )
};
//=============

//=============
mapContent = () =>{
    switch(this.state.edminElement){
        case "resume":{
           
           return(    
                this.state.resume.map(res=>{
                    return (
                        <div className="col-12 ">
                            <span onClick={() => this.deleteResume(res._id)}>X</span>
                            <div className="">
                                <embed className="h-100"type="application/pdf" src={res.Resume}></embed>
                            </div>
                        </div>
                    )   
                })
            )
        }
        default:{
            return(
                this.state.toMap.map(projects=>{
                    return(
                        <div key={projects.projectName} class="col-md-6 col-lg-4 pl-0 pr-3 pb-3">
                            <div class="card text-center p-3 card-simple h-100 bg-light border-dark">
                                <img class="card-img-top w-100 mx-auto" src={projects.img[0]} alt={projects.projectName}/>
                                <div class="card-body">
                                    <h4 class="card-title">{projects.projectName}</h4>
                                    <div class='row justify-content-between'>
                                    <button onClick={()=> this.editProjectModalToggle(projects._id,projects.projectName,projects.domainLink,projects.description)} class='btn btn-secondary border-dark col-5'>Edit</button>
                                    <button onClick={()=> this.handleInputDelete(projects._id)} class='btn btn-primary col-5'>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            )
        }
    }
 
};
     
render(){
    return(
        <body id="adminWrapper" class='container-fluid bg-light text-dark h-100 p-0'>
            <nav id="adminNav" class='row navbar mb-0 navbar-dark px-2 mx-0 border-bottom border-dark'>  
                <span class='text-dark'>Chulpsnet</span>
                <button onClick={this.handleClickSignOut} class='btn btn-primary ml-auto'> Log Out  </button>
            </nav>
            <div id="adminBody" class='row m-0 p-0'>
                    <div id="leftColumn" class='col-12 col-md-2 px-0 border-right border-dark'>
                            <span onClick={()=> this.addProjectModalToggle(true)} class='float-right p-1'>(+)</span>
                        <div style={{color:`${this.state.colorPro}`} } onClick={this.loadProjects} id="projectButton" class="border-bottom border-dark p-2">Projects</div>
                            <span  onClick={this.addSnippetModalToggle} class='float-right p-1'>(+)</span>
                        <div style={{color:`${this.state.colorSnip}`} } onClick={this.loadSnippets} id="snippetsButton" class="border-bottom border-dark p-2">Snippets                        </div>
                            <span onClick={this.addResumeModalToggle} class='float-right p-1'>(+)</span>
                        <div style={{color:`${this.state.colorRes}`} } onClick={this.loadResume} id="resumeButton" class="border-bottom border-dark p-2">Resumé                        </div>
                        <div className="pt-4">
                        </div>
                    </div>
                   
                    <div style={{overflowY:"scroll"}} id="rightColumn" class='col-12 col-md-10 px-0 bg-black'>
                        <section class="section d-flex align-items-center">
                            <div class="container-fluid px-0">
                                <div class="row m-0 pt-3 pl-3">
                                    <div class="col p-0">
                                        <div class="row mx-0">
                                            {this.mapContent()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
            </div>
        <Modal isOpen={this.state.toggle} toggle={this.toggle}>
            {this.modalContent()}
        </Modal>
        </body>
    )
};
  
    
};

export default AdminProfilePage;
