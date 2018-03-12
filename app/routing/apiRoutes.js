// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
var db = require("../models");
// var nodeZillow = require("../routing/javascript.js");

// Routes
module.exports = function(app) {
    app.get("/api/Affordable_housing", function(req, res) {
        console.log(JSON.stringify(results));
        db.Affordable_housing.findAll({}).then(function(dbAffordable_housing) {
         res.json(dbAffordable_housing);
      });



    // app.post("/all", function(req, res) {
        
    // });
});}
