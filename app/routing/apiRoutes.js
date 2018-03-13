// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
"use strict";

var db = require("./app/models");

console.log("db.Affordable_housings =",db.Affordable_housing);


module.exports = function(app) {
    app.get("/api/Affordable_housing", function(req, res) {
        
        db.Affordable_housing.findAll({}).then(function(dbAffordable_housing) {
         res.json(dbAffordable_housing);
      });

    app.get("/api", function(req, res) {
      console.log("connected");
        db.Affordable_housing.findAll({})
        .then(function(data){
          res.json(data);
        })
    });
    app.post("/api/Affordable_housing", function(req, res) {
     db.Affordable_housing.findAll({
      where: {
        // zip_code: req.body.zip_code,
        property_type: req.body.property_type,
        community_area_name: req.body.community_area_name 
      }
     }).then(function(data) {
       res.json(data)
    });
  });
  app.post("/api/retry", function(req, res) {
    db.Affordable_housing.findAll({
     where: {
       community_area_name: req.body.community_area_name 
     }
    }).then(function(data) {
      res.json(data)
     
   });
 });
});
}