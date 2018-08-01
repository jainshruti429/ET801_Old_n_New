
//functions/API of a logged in user.

// Loads up config for connection
// var mysql = require('mysql');
// var dbconfig = require('../config/database');
//var connection = mysql.createConnection(dbconfig.connection);
//var alert = require('alert-node');

//connection.query('USE ' + dbconfig.database);

// const notifier = require('node-notifier');

// var nodemailer = require('nodemailer');
// var bcrypt = require('bcrypt-nodejs');

// //=================================================

// var ssn;//variable of session
//var schedule = require('node-schedule');

var express  = require('express');
var app = express();
//var crypto = require('crypto');

// //=================================================

var my_arr = [];

module.exports =  {

my_loop: function(req,res,next){

    //==========================================================================
    //=================WRITE YOUR CODE HERE=====================================

for(var i = 0 ; i <5; i++){
    for(var j =0; j<i; j++){
        my_arr.push(i);
    }
}



    //==========================================================================
    return next();
},

page: function(req,res){
    res.render("./page.ejs",{my_arr:my_arr});
},

}

// for(var i = 0 ; i <5; i++){
//     for(var j =0; j<i; j++){
//         my_arr.push(i);
//     }
// }



