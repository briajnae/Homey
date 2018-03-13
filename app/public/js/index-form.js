$(document).ready(function(){
  
  $("#submit-index").on("click", function(e){
    e.preventDefault();
    var data_object = { 
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
        
      }
    })
    const retry = function(data_object){
      $.post("/api/retry/", data_object, function(){
      }).then(function(data){
        console.log("retried data", data)
      });
    };  
  });

     
});


            
  



