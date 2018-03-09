// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
var db = require("../models");
console.log("db.Affordable_housings =",db.Affordable_housing);

module.exports = function(app) {

    app.get("/api", function(req, res) {
      // console.log("connected")
        db.Affordable_housing.findAll({})
        .then(function(data){
          res.json(data);
        })
    });

    app.get("/home.html", function(req, res) {
         db.Affordable_housing.findOne({
          where: {
            Senior: req.params.Senior 
          }
        }).then(function(dbAffordable_housing) {
          res.json(data);
        });
    });

    app.get('./server.js', function (req, res) {
        res.send('GET request to the homepage')
      })
};
