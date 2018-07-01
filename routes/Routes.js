const db = require("../models");
const nodemailer = require("nodemailer");

module.exports = function (app, express) {

    app.post("/test", function (req, res) {
        db.Admin.create({
                username: req.body.username,
                password: req.body.password
        }).then(function (res) {
            res.send()
          });
    });

    app.post("/api/test",(req,res)=>{
        console.log("HEL",req)
        db.User.create({
            visitor:req.body.visitor,
        })
        .then(res=>{
            res.json()
        })
    });

//================ Crate new project route
    app.post("/api/create/projects", function (req, res) {
        db.Portfolio.create(req.body)
            .then(() => {
             db.Portfolio.find({})
             .then((data)=> {
                res.json(data);
             });
            }).catch(function(error){
                if (error) return error
            });
    });
    app.post("/api/create/snippets", function (req, res) {
        db.Snippets.create(req.body)
            .then(() => {
             db.Snippets.find({})
             .then((data)=> {
                res.json(data);
             });
            }).catch(function(error){
                if (error) return error
            });
    });
//================   

//===== update ===========
app.post("/api/update/projects/:id",(req,res)=>{
    db.Portfolio.update({_id:req.params.id}, 
        {$set:{ 
            projectName:req.body.projectName,
            description:req.body.description,
            domainLink:req.body.domainLink
        }
        },[{new:true}], () =>{
        }).then(()=>{   
            if(req.body.img.length !== 0){
                db.Portfolio.findOneAndUpdate({_id:req.params.id}, {$push:{img:[req.body.img]}})
                    .then(()=>{
                        db.Portfolio.find({}).then((data)=>{
                            res.json(data);
                        });
                    });
            }else{
                db.Portfolio.find({}).then((data)=>{
                    res.json(data);
                });
            };
        });
});
app.post("/api/update/snippets/:id",(req,res)=>{
    console.log("Body",req.body)
    db.Snippets.update({_id:req.params.id}, 
        {$set:{ 
            projectName:req.body.projectName,
            description:req.body.description,
            domainLink:req.body.domainLink
        }
        },[{new:true}], () =>{
        }).then(()=>{   
            if(req.body.img.length !== 0){
                db.Snippets.findOneAndUpdate({_id:req.params.id}, {$push:{img:[req.body.img]}})
                    .then(()=>{
                        db.Snippets.find({}).then((data)=>{
                            res.json(data);
                        });
                    });
            }else{
                db.Snippets.find({}).then((data)=>{
                    res.json(data);
                });
            };
        });
}); 
//================

//========== Submit Comments
 //insert comments per projects or snippets saves as an array
 app.post("/api/commentSubmit/projects/:id",  (req, res) =>{
    console.log("IMP:",req.body.comment)
    db.Portfolio.findOneAndUpdate(
        {
            _id:req.params.id}, 
            {$push:{comment:[req.body.comment],rating:[req.body.rating]
        }
   }).then((response)=>{
         db.Portfolio.find({})
         .then(resp=>{
            res.json(resp)
         });
     }).catch(error=>{
         if(error) throw error
     }); 
});

app.post("/api/commentSubmit/snippets/:id",  (req, res) =>{
    console.log("IMP:",req.body.comment)
    db.Snippets.findOneAndUpdate(
        {
            _id:req.params.id}, 
            {$push:{comment:[req.body.comment],rating:[req.body.rating]
        }
   }).then((response)=>{
         db.Snippets.find({})
         .then(resp=>{
            res.json(resp)
         });
     }).catch(error=>{
         if(error) throw error
     }); 
});
         

//=================


//========== Delete Images
app.post("/api/deleteimage/projects",(req,res)=>{
    db.Portfolio.findByIdAndUpdate({_id:req.body.id},{$pull:{img:req.body.img}})
    .then(()=>{
        db.Portfolio.find({})
        .then((resp)=>{
            res.json(resp)

        })

    });
});
app.post("/api/deleteimage/snippets",(req,res)=>{
    console.log(req.body.img[0])
    db.Snippets.findByIdAndUpdate({_id:req.body.id},{$pull:{img:req.body.img}})
    .then(()=>{
        db.Snippets.find({})
        .then((resp)=>{
            res.json(resp)

        })

    });
});

//================

//========= Delete project
    app.post("/api/delete/projects",(req,res)=>{
        db.Portfolio.deleteOne({_id:req.body.id})
        .then(()=>{
            db.Portfolio.find({})
            .then((data)=>{
                res.json(data)
            });
        });
    });

    app.post("/api/delete/snippets",(req,res)=>{
        db.Snippets.deleteOne({_id:req.body.id})
        .then(()=>{
            db.Snippets.find({})
            .then((data)=>{
                res.json(data)
            });
        });
    });
//================

//=========== Get Resume
app.get("/api/resume",function(req,res){
    db.Resume.find({})
    .then(function(response){
        res.json(response)
    }).catch(function(error){
        if(error) throw error;
    });
});
//===========


app.post("/api/visitor/checkin",(req,res)=>{
    console.log("BODY",req.body)
    db.User.findByIdAndUpdate({_id:req.body.id}, 
        {$set: req.body
            
        
    })
});

    //getting visitors data analytics
app.get("/api/visitor/data",(req,res)=>{
    db.User.find({})
    .then(response=>{
        res.json(response)
    });
});

    //check if user exists in database when loging in 
app.post("/api/adminLogin", (req, res) => {
        db.Admin.findOneAndUpdate({
            username: req.body.username,
            password: req.body.password,
        }, {$set: { token: "t" + Math.random()}},{ new: true}, function (err, doc){}).then(function (data) {
            if (data) {
                db.Admin.findOne({
                    username: req.body.username,
                    password: req.body.password,
                }).then((response) => {
                    if (response) {
                        res.json(response)
                    }
                });
            } else {
                res.send("WRONG INFORMATION")
            };
        });
});

    //when reaches admin authentication page checks if local strage matches with database
    app.post("/api/loginAuthentication", (req, res) => {
        db.Admin.findOne({
            username: req.body.username,
        }).then((response) => {
            res.send(response)
        }).catch(function (error) {
            if (error) return error
        });
    });





  

    //get projects to map
    app.get("/api/projects",  (req, res) =>{
        db.Portfolio.find({})
        .then((response) =>{
            res.json(response)
        }).catch( (error) =>{
            if (error) return error
        });
    });
    app.get("/api/snippets", function (req, res) {
        db.Snippets.find({})
        .then((response) =>{
            res.json(response)
        }).catch( (error) =>{
            if (error) return error
        });
    });

   
  
 
    app.post("/uploadResume",function(req,res){
        db.Resume.create(req.body)
        .then((response)=>{
            db.Resume.find({})
            .then(response=>{
              res.json(response)
            })
        }).catch(function(error){
            if (error) throw error;
        });
    });
   
    ///Send contactMe information to email
    app.post("/api/contactMe",function(req,res){
        if(req.body){

            const output = `
                <p>You have a new contact request</p>
                <h3>Contact Details</h3>
                <ul>  
                    <li>Name: ${req.body.name}</li>
                    <li>Email: ${req.body.email}</li>
                    <li>Company: ${req.body.subject}</li>
                    <li>Phone: ${req.body.message}</li>
                </ul>
                <h3>Message</h3>
                <p>${req.body.message}</p>
                `;
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,  
                auth: {
                    user: 'chuckoward@gmail.com',  
                    pass: '883562616'  
                },
                tls:{
                    rejectUnauthorized:false
                }
            });
          
            let mailOptions = {
                from: '"Nodemailer Contact" <your@email.com>', 
                to: 'chuckoward@gmail.com',  
                subject: 'Node Contact Request',  
                text: 'Hello world?',  
                html: output  
            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);   
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
          
                res.render('contact', {msg:'Email has been sent'});
            });
        }
    });





//=====Add external links
app.post("/api/add/projects/externalLinks/:id",(req,res)=>{
    console.log("ID",req.params.id)
    console.log("ID",req.body.externalLink)
    db.Portfolio.findOneAndUpdate(
        {
            _id:req.params.id}, 
            {$push:{externalLink:[req.body.externalLink]
        }
    }).then(response=>{
        db.Portfolio.find({})
        .then(response=>{
            res.json(response)
        })
    })
})

app.post("/api/add/snippets/externalLinks/:id",(req,res)=>{
    db.Snippets.findOneAndUpdate(
        {
            _id:req.params.id}, 
            {$push:{externalLink:[req.body.externalLink]
        }
    }).then(response=>{
        db.Snippets.find({})
        .then(response=>{
            res.json(response)
        })
    })
})
//==============

//========Delete external links
app.post("/api/delete/projects/externalLinks/:id",(req,res)=>{
    db.Portfolio.findByIdAndUpdate({_id:req.body.id},{$pull:{externalLink:req.body.externalLink}})
    .then(response=>{
        db.Portfolio.find({})
        .then(response=>{
            res.json(response)
        })
    })
})

app.post("/api/delete/snippets/externalLinks/:id",(req,res)=>{
    db.Snippets.findByIdAndUpdate({_id:req.body.id},{$pull:{externalLink:req.body.externalLink}})
    .then(response=>{
        db.Snippets.find({})
        .then(response=>{
            res.json(response)
        })
    })
})

app.post("/api/delete/resume/",(req,res)=>{
    db.Resume.deleteOne({_id:req.body.id})
        .then(()=>{
            db.Resume.find({})
            .then((data)=>{
                res.json(data)
            });
        })
})
///=============================
};