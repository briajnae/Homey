var Zillow = require('node-zillow');

//ajax call
//var queryURL = "http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=X1-ZWz18qcmiqjbwr_82rpe&address=2114+Bigelow+Ave&citystatezip=Seattle%2C+WA"
//var googleQueryURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDafC02KPSMr7ZrkbVc3PUKzEcPUmWLGBU&libraries=places"

//Instantiate 

var zillow = new Zillow('X1-ZWz18qcmiqjbwr_82rpe');

var parameters = {
  zpid: "",
  address: {
      street: '',
      zipcode: '',
      city: '',
      state: '',
      latitude: '',
      longitude: ''
    },
  };
  
  zillow.get('GetZestimate', parameters)
    .then(function(results) {
      console.log(results)
      return results;
      // results here is an object { message: {}, request: {}, response: {}} 
    })

// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function (response) {
//     console.log(response);
//     console.log(response.Runtime);
// });

// $.ajax({
//     url: googleQueryURL,
//     method: "GET"
// }).then(function (response) {
//     console.log(response);
//     console.log(response.Runtime);
// });

// var defaultBounds = new google.maps.LatLngBounds(
//     new google.maps.LatLng(37.090237, 95.7129));
  
//   var input = document.getElementById('searchTextField');
//   var options = {
//     bounds: defaultBounds,
//     //types: ['establishment']
//   };
  
//   autocomplete = new google.maps.places.Autocomplete(input, options);


// zillow.get('GetSearchResults', parameters)
//     .then(function (results) {
//         return results;

//     });
