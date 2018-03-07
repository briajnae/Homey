var path = require("path");

module.exports = function(app) {
    //index route loads the landing page
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    //home loads the home page where results will be searched. 
    ;app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })
}