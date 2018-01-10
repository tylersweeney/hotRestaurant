// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var tables = [];
var waitList = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

app.get("/api/tables", function(req,res){
    res.json(tables);
});

app.get("/api/waitList", function(req,res){
    res.json(waitList);
});

app.post("/api/tables", function(req,res){
    if (tables.length < 5){
        tables.push(req.body);
    }
    else {
        waitList.push(req.body);
    }
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
