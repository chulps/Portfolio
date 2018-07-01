var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var AdminSchema = new Schema({
    username:{
        type:String,
        default:"asdf"
    },
    password:{
        type:String,
        default:"asdf"
    },
    token:{
        type:String,
        default:"1213"
    }
});

var Admin = mongoose.model("Admin", AdminSchema)
module.exports = Admin;