$(document).ready(function(){
  
  $("#submit-index").on("click", function(e){
    e.preventDefault();
    var data_object = { 
      zip_code: $("#zipcode").val().trim(),
      property_type: $("#propertyType").val(),
      community_area_name: $("#neighborhood").val()
    }
    console.log("hello", data_object)

    $.ajax({
                type: "POST",
                url: "/api/Affordable_housing",
            }).then(function (data_object) {
    
              if(data_object === db.Affordable_housing.zip_code ){
                console.log("data");
              }   
       
            });                      
  });

  // function post(data_object){
  //   $.post("/api",data_object){
  //     then(data_obect)
  //   };
  // };
  
 

    $.post("/api/Affordable_housing/", data_object, function(){
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


  // $("#submit-index").on("click", function(event){
    
  //       event.preventDefault();
   
  //       var data_object = {
  //         zip: $("#zipcode").val().trim(),
  //         // type: $("#propertyType").val(),
  //         // neighborhood: $("#neighborhood").val()
  //       }
  //       console.log(data_object);
        
  //             
  



