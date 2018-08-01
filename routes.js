
//load all the things needed.

// connection.query('USE ' + dbconfig.connection.database);


var express  = require('express');
var app = express();
var path = require('path');

// import functions from other files.
var func = require('./functions') //common functions

// ==========================================

module.exports = function(app, passport) {
//for testing
app.get("/", func.my_loop, func.page);	

}