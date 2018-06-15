const db = require("../models");

module.exports = function(app,express){
   app.post("/api/create/project", function(req,res){
       console.log(req.body)
       db.Project.create(req.body)
       .then((data)=>{
       res.json(data);
       }).catch(error=>{
           if (error) throw error;
       });
   });
   app.get("/api/find/projects",(req,res)=>{
    db.Project.find({})
    .then(response=>{
    res.json(response)
    })
    })
   
}