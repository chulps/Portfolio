var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SnippetsSchema = new Schema({
    projectName:{
        type:String
    },
    
    description:{
        type:String
    },

    domainLink:{
        type:String
    },
    
    externalLink:[{
        type:String,
    }],

    comment:[{
        type:String,
    }],

    img:[{
        type:String,
    }],

    rating:[{
        type:Number,
        default:0
    }],
 
});

var Snippets = mongoose.model("Snippets", SnippetsSchema)
module.exports = Snippets;