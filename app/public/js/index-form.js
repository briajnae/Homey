$(document).ready(function(){
  
  $("#submit-index").on("click", function(e){
    e.preventDefault();
    var data_object = { 
      zip: $("#zipcode").val().trim(),
      type: $("#propertyType").val(),
      neighborhood: $("#neighborhood").val()
    }
    console.log("hello", data_object)
  });

  // function post(data_object){
  //   $.post("/api",data_object){
  //     then(data_obect)
  //   };
  // };
  
 


});