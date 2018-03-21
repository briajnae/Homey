$(document).ready(function () {

  $("#submit-index").on("click", function (e) {

    e.preventDefault();
    var data_object = {
      property_type: $("#propertyType").val(),
      community_area_name: $("#neighborhood").val()
    }
    $.post("/api/Affordable_housing", data_object, function () {
      console.log("inside the post", data_object)
    }).then(function (data) {
      if (!data.length) {
        retry(data_object);
      }
      else {
        for (i = 0; i < data.length; i++) {
          
          $("#results").append("<div id=results-list class=col-md-4 col-lg-4>" + "<img src='" + queryURL + "'> " + "</img>" + "<h3>" + data[i].community_area_name + "</h3>" + "<h4>" + data[i].property_name + "</h4>" + "<p>" + data[i].address + "<p>" + "<p>" + data[i].property_type + "<p>" + "<button id=map-button onclick=window.location.href='/home.html'>" + "View Map" + "</button>" + "</div>");  
          updateMap();

          var location = data[i].location;
          var use = location.substr(1).slice(0, -1);;
          var apiKey = "AIzaSyD0KYDrGLg-xZIwXfNvcnCj9_p4yn-3bz8";
          var queryURL = "https://maps.googleapis.com/maps/api/streetview?" + "size=200x150" + "&location" + location + apiKey;
          
          localStorage.setItem("dataArr", JSON.stringify(data));
          
        }
      }
    });

    const retry = function (data_object) {
      $.post("/api/retry/", data_object, function () {
      }).then(function (data) {
        for (i = 0; i < data.length; i++) {
          $("#results").append("<div id=results-list class=col-md-4 col-lg-4>" + "<img class=api-img src='" + queryURL + "'> " + "</img>" + "<h3>" + data[i].community_area_name + "</h3>" + "<h4>" + data[i].property_name + "</h4>" + "<p>" + data[i].address + "<p>" + "<p>" + data[i].property_type + "<p>"+ "<button id=map-button onclick=window.location.href='/home.html'>" + "View Map" + "</button>" + "</div>");
         
          var location = data[i].location;
          var use = location.substr(1).slice(0, -1);
          var yes = use.split(" ").join("");
        
          var apiKey = "AIzaSyD0KYDrGLg-xZIwXfNvcnCj9_p4yn-3bz8";
          var queryURL = "https://maps.googleapis.com/maps/api/streetview?" + "size=300x250" + "&location=" + yes + "&key=" + apiKey;
          
          localStorage.setItem("dataArr", JSON.stringify(data));

        }
      });

    };

  }); 

});


  
    




