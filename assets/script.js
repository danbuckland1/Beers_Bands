$(document).ready(function(){

// src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"


// var config = {
//     apiKey: "AIzaSyA34rCupaiOnfXRKBhsmgYsTc6Brp9ysew",
//     authDomain: "beers-and-bands-rev-1.firebaseapp.com",
//     databaseURL: "https://beers-and-bands-rev-1.firebaseio.com",
//     projectId: "beers-and-bands-rev-1",
//     storageBucket: "beers-and-bands-rev-1.appspot.com",
//     messagingSenderId: "592809981196"
//   };

//   firebase.initializeApp(config);

// var config = {
//     apiKey: "AIzaSyA34rCupaiOnfXRKBhsmgYsTc6Brp9ysew",
//     authDomain: "beers-and-bands-rev-1.firebaseapp.com",
//     databaseURL: "https://beers-and-bands-rev-1.firebaseio.com",
//     projectId: "beers-and-bands-rev-1",
//     storageBucket: "beers-and-bands-rev-1.appspot.com",
//     messagingSenderId: "592809981196"
//   };
//   firebase.initializeApp(config);




//  var artist = $('#locationInput').val();
  
//   var dataRef = firebase.database();
//  //var artist = "Drake";
// // var location = "New+York"
// // console.log(artist);


// $('#letsRock').on("click", function(event) {
//   //   // prevent form from submitting
//      event.preventDefault();
//      var artist = $('#location').val();
    
//      console.log(artist);

  
//   var dataRef = firebase.database();


   

//   var queryURL1 = 'http://beermapping.com/webservice/locquery/1cd5db8a402574bb7ecab4285b88793f/jersey+city&s=json'
//   var queryURL2 = 'https://www.bandsintown.com/webservice/locquery/1f631e0138387b85bc49eb32aa23ea48/'

//   $.ajax({
//     url: queryURL1,
//     method: "GET",
//     dataType: "xml",
//   }).then(function(response) {});

//   $.ajax({
//     url: queryURL2,
//     method: "GET",
//     dataType: "xml",
//   }).then(function(response) {});


  //When you click the Let's Rock button....
  $("body").on("click","#letsRock", function(){
    console.log("testing");
    //Store the typed in value to variable location
    var location = $("#locationInput").val().trim();
    //Replace spaces in location string with +
    location.replace(" ","+");
    //plug location value into google map src and replace the original src in the html
    $("#google-map").attr("src","https://www.google.com/maps/embed/v1/search?key=AIzaSyBbmoAi4qVWUugXB3-QpKR_kdAhtalKGI4&q=Beer+In+" + location);
  });

});

    // $('beer-holder').html(artist);
    
//   });


//   var proxyURL = 'https://shielded-hamlet-43668.herokuapp.com/';
//   var queryURL1 = 'http://beermapping.com/webservice/loccity/1cd5db8a402574bb7ecab4285b88793f/jersey+city&s=json'
//   // var queryURL1 = 'http://beermapping.com/webservice/loccity/1cd5db8a402574bb7ecab4285b88793f/jersey+city&s=json'
//   var queryURL2 = 'http://rest.bandsintown.com/artists/maroon+5/events?app_id=1f631e0138387b85bc49eb32aa23ea48&artistname=maroon+5'
//   //var queryURL2 = 'http://rest.bandsintown.com/artists/' + artist + '/events?app_id=1f631e0138387b85bc49eb32aa23ea48&artistname=' + artist

//   $.ajax({
//     url: proxyURL + queryURL1,
//     method: "GET",
//     dataType: "xml",
//   }).then(function(response) {});

//   $.ajax({
//     url: proxyURL + queryURL2,
//     method: "GET",
//     dataType: "xml",
//   }).then(function(response) {});


// });
    


  // }, function(errorObject) {
  //     console.log("Errors handled: " + errorObject.code);
  //   });
 
 

