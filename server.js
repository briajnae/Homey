var express = require("express");
var bodyParser = require("body-parser");
var db = require("./app/models");


var app = express();


var PORT = process.env.PORT || 8000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("app/public"));


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });

