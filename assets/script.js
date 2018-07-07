$(document).ready(function(){

var config = {
    apiKey: "AIzaSyA34rCupaiOnfXRKBhsmgYsTc6Brp9ysew",
    authDomain: "beers-and-bands-rev-1.firebaseapp.com",
    databaseURL: "https://beers-and-bands-rev-1.firebaseio.com",
    projectId: "beers-and-bands-rev-1",
    storageBucket: "beers-and-bands-rev-1.appspot.com",
    messagingSenderId: "592809981196"
  };

  firebase.initializeApp(config);



//  var artist = $('#locationInput').val();
  
  var dataRef = firebase.database();
 //var artist = "Drake";
// var location = "New+York"
// console.log(artist);

$('#letsRock').on("click", function(event) {
  //   // prevent form from submitting
     event.preventDefault();
     var artist = $('#location').val();
    
     console.log(artist);

    // $('beer-holder').html(artist);
    
  


  var proxyURL = 'https://shielded-hamlet-43668.herokuapp.com/';
  var queryURL1 = 'http://beermapping.com/webservice/loccity/1cd5db8a402574bb7ecab4285b88793f/jersey+city&s=json'
  // var queryURL1 = 'http://beermapping.com/webservice/loccity/1cd5db8a402574bb7ecab4285b88793f/jersey+city&s=json'
  var queryURL2 = 'http://rest.bandsintown.com/artists/' + artist + '/events?app_id=1f631e0138387b85bc49eb32aa23ea48&artistname= ' + artist
  //var queryURL2 = 'http://rest.bandsintown.com/Drake/events?app_id=1f631e0138387b85bc49eb32aa23ea48&artistname=Drake' 
console.log(queryURL2);


  $.ajax({
    url: proxyURL + queryURL1,
    method: "GET",
    dataType: "xml",
  }).then(function(response) {});

  $.ajax({
    url: proxyURL + queryURL2,
    method: "GET"
    // dataType: "xml",
  }).then(function(response) {
    console.log (response);
  $(".beer-holder").text(response);

  //convert object to string
  
  });


});

    
});

  // }, function(errorObject) {
  //     console.log("Errors handled: " + errorObject.code);
  //   });
 
 