$(document).ready(function(){
  
  $("#submit-index").on("click", function(event){
    var data_object = {
      zip: $("#zipcode").val().trim(),
      type: $("#propertyType").val(),
      neighborhood: $("#neighborhood").val()
    }
    console.log("DONE");
  });

  

});