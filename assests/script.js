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