
src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"

var config = {
    apiKey: "AIzaSyA34rCupaiOnfXRKBhsmgYsTc6Brp9ysew",
    authDomain: "beers-and-bands-rev-1.firebaseapp.com",
    databaseURL: "https://beers-and-bands-rev-1.firebaseio.com",
    projectId: "beers-and-bands-rev-1",
    storageBucket: "beers-and-bands-rev-1.appspot.com",
    messagingSenderId: "592809981196"
  };
  firebase.initializeApp(config);




  
  var dataRef = firebase.database();


  var queryURL1 = 'http://beermapping.com/webservice/loccity/1cd5db8a402574bb7ecab4285b88793f/jersey+city&s=json'
  var queryURL2 = 'http://rest.bandsintown.com/artists/maroon+5/events?app_id=1f631e0138387b85bc49eb32aa23ea48&artistname=maroon+5'

  $.ajax({
    url: queryURL1,
    method: "GET",
    dataType: "xml",
  }).then(function(response) {});

  $.ajax({
    url: queryURL2,
    method: "GET",
    dataType: "xml",
  }).then(function(response) {});

 
 