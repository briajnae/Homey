// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
var db = require("./models");
// var nodeZillow = require("../routing/javascript.js");

// Routes
module.exports = function(app) {

    app.post("/all", function(req, res) {
        
    });

    app.get('./server.js', function (req, res) {
        res.send('GET request to the homepage')
      })
};
