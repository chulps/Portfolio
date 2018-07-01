var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PortfolioSchema = new Schema({
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

var Portfolio = mongoose.model("Portfolio", PortfolioSchema)
module.exports = Portfolio;