const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const logger = require("morgan");
const db = require("./models");


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// this line is always required when using body parser
app.use(logger("dev"));

// Enable body parser
app.use(bodyParser.urlencoded({extended:true}));

// Raise limit to 20mb
app.use(bodyParser.json({limit:'20mb'}));

//  Set up connection with mongoDB now. Use eight process.env or use local host
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/Portfolio";

// Connect to mongo db uri
mongoose.connect(MONGODB_URI);

// declare that database = mongoose connection
const database = mongoose.connection;

// open mongoose connection with mongodb
database.once("open", function(){
  console.log("mongoose connection successful");
});

require("./routes/Routes")(app,express,db);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
