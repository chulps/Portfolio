var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    projectName:{
        type:String
    },
   
    title:{
        type:String
    },
   
    link:{
        type:String
    },
    img:{
        type:String,
    },
    description:{
        type:String,
    },
   });
   var Project = mongoose.model("Project", ProjectSchema)
   module.exports = Project;