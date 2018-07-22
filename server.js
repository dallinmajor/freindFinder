var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var data = require("./app/data/friends");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/friends", function (req, res) {

});

app.post("/api/friends", function (req, res) {

});

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});