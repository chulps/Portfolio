var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    visitors:{
        type:Number,
        default: 0
    },
    visitingDate:{
       type: Number,
    }
});

var User = mongoose.model("User", UserSchema)
module.exports = User;