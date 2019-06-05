//require dependencies
var path = require("path");
var express = require("express");
var nodemon = require("nodemon");

//set up express application
var app = express();
var PORT = process.env.PORT || 3060; //set up the port to either 3000 or whatever heroku is

