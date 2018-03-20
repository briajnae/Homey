$(document).ready(function(){

  /* on Click for submit */
  $("#submit-index").on("click", function(e){
    e.preventDefault();
    /* takes in parameters from drop down menu */
    var data_object = { 
      property_type: $("#propertyType").val(),
      community_area_name: $("#neighborhood").val()
    }
    
    console.log("hello", data_object);
    /* takes input from user and sets local storage */
    localStorage.setItem("userInput", JSON.stringify(data_object));
    /* localStorage.getItem("userInput");*/

    
    /* post request that matches user input with data from server/database */
    $.post("/api/Affordable_housing", data_object, function(){
      console.log("inside the post", data_object)
    }).then(function(data){
      console.log("hehehehe", data);
  
    /* if data isn't retrieve then retry function */
      if(!data.length){
        console.log("send to retry")
        retry(data_object);
      }
    /* if data then append */
      else{
        for (i = 0; i < data.length; i++) { 
          $("#results").append("<li>" + data[i].community_area_name + ", Property type: " + data[i].property_type + ", Property Name:  " + data[i].property_name + ", Address: " + data[i].address + "</li>")
        }
      }
    })
    //retry function if no resrults show up
    /* if no immediate response then retry function to attempt to append that again */
    const retry = function(data_object){
      $.post("/api/retry/", data_object, function(){
      }).then(function(data){
        console.log("retried data", data)
        for (i = 0; i < data.length; i++) { 
          $("#results").append("<li>" + data[i].community_area_name + ", Property type: " + data[i].property_type + ", Property Name:  " + data[i].property_name + ", Address: " + data[i].address + "</li>")
        }
      });
    }; 
                   
  });
     
});

