// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//var hotRestaurant = require("./app.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Tables (DATA)
// =============================================================
var tables = [{
  name: "Yoda",
  phoneNumber: "555555555",
  email: "email@gmail.com",
  unique_ID: "2000"
}, {
  name: "Leia",
  phoneNumber: "555555555",
  email: "email@gmail.com",
  unique_ID: "8000"
}, {
  name: "Darth Maul",
  phoneNumber: "555555555",
  email: "email@gmail.com",
  unique_ID: "5000"
}];

var waitList = [{
  name: "John Lennon",
  phoneNumber: "555555555",
  email: "email@gmail.com",
  unique_ID: "jLen"
}, {
  name: "Ringo Starr",
  phoneNumber: "555555555",
  email: "email@gmail.com",
  unique_ID: "ringo"
}];


// Routes
// =============================================================

// Basic route that sends the user to the Home Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../../home.html"));
  //res.send("Working");
});

// Route that sends the user to the View Tables Page
app.get("/tables.html", function(req, res) {
  res.sendFile(path.join(__dirname, "../../tables.html"));
});

// Route that sends the user to the Make Reservation Page
app.get("/reserve.html", function(req, res) {
  res.sendFile(path.join(__dirname, "../../reserve.html"));
});

// View currently reserved tables - provides JSON
app.get("/api/tables", function(req, res) {
  res.json(tables);
});

// View current wait list for tables - provides JSON
app.get("/api/wait", function(req, res) {
  res.json(waitList);
});

// Create New Reservation - takes in JSON input
app.post("/api/new", function(req, res) {
  var newReservation = req.body;

  console.log(newReservation);

  tables.push(newReservation);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});