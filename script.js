
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBMQww2dkQuvD5YIPBIKHIcbto9o5dCgCQ",
    authDomain: "humanitarianaidappealportal.firebaseapp.com",
    databaseURL: "https://humanitarianaidappealportal.firebaseio.com",
    projectId: "humanitarianaidappealportal",
    storageBucket: "humanitarianaidappealportal.appspot.com",
    messagingSenderId: "98419384979"
  };
  firebase.initializeApp(config);


  

  /*firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });*/
  const txtEmail=document.getElementById('email');
  const txtPass=document.getElementById('password');

  var v11 = document.getElementById("v1");
  var org1 = document.getElementById("org");
  var opman1 = document.getElementById("opman");

  signup.addEventListener('click',e=>{
    const email=txtEmail.value;
    const pass=txtPass.value;
    //const auth= firebase.auth();
    firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      firebase.database().ref('users').child(user.uid).set({
        
          designation: "Volunteer"});
      /*if(v11.checked==true)
      {
        firebase.database().ref('users').child(user.uid).set({
        
          designation: "Volunteer"});
      }
      if(org1.checked==true)
      {
        firebase.database().ref('users').child(user.uid).set({
        
          designation: "Organization"});
      }
      if(opman1.checked==true)
      {
        firebase.database().ref('users').child(user.uid).set({
        
          designation: "Operation Manager"});
      }*/
    /*
    
        if(opman1.checked==true)
          designation: "Operation Manager"
        if(org1.checked==true)
          designation: "Organization"*/
  
    // ...
    }
   else {
    // User is signed out.
    // ...
  }
});
    /*firebase.database().ref('usersData').set({
    username: "name",
    email: "email",
    profile_picture : "imageUrl"
  });*/
  });
  