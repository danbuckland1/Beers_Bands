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
    //Store the typed in value to variable location
    var location = $("#locationInput").val().trim();
    //Replace spaces in location string with +
    location.replace(" ","+");
    //plug location value into google map src and replace the original src in the html
    $("#google-map").attr("src","https://www.google.com/maps/embed/v1/search?key=AIzaSyBbmoAi4qVWUugXB3-QpKR_kdAhtalKGI4&q=Beer+In+" + location);
  });

});