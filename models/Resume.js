var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ResumeSchema = new Schema({
   Resume:{
       type:String
   }

});

var Resume = mongoose.model("Resume", ResumeSchema)
module.exports = Resume;