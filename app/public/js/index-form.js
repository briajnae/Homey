$(document).ready(function(){
  
  $("#submit-index").on("click", function(e){
    e.preventDefault();
    
    // window.location.href ='/home.html';
    var data_object = { 
      zip_code: $("#zipcode").val().trim(),
      property_type: $("#propertyType").val(),
      community_area_name: $("#neighborhood").val()
    }
    console.log("hello", data_object)
    $.post("/api/Affordable_housing", data_object, function(){
      console.log("inside the post", data_object)
    }).then(function(data){
      console.log("hehehehe", data);
      if(!data.length){
        console.log("send to retry")
        retry(data_object);
      }
      else{
        for (i = 0; i < data.length; i++) { 
          $("#results").append("<li>" + data[i].community_area_name + ", Property type: " + data[i].property_type + ", Property Name:  " + data[i].property_name + ", Address: " + data[i].address + "</li>")
        }
         
        
        
        // $(".listingCards").text("<p>" + data[0].community_area_name + "</p>");
        // $(".listingCards").text("<p>" + data[0].property_type + "</p>");
        // $(".listingCards").text("<p>" + data[0].zip_code + "</p>");        
        // console.log("data community " + data[0].community_area_name);
        // console.log("data prop " + data[0].property_type);
        // console.log("data zip " + data[0].zip_code);
      }
    })
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


            
  



