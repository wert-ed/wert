// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-jEjHUzD5XLPftUrLxCHfIMjmbscoQqM",
  authDomain: "qwerty-pg.firebaseapp.com",
  projectId: "qwerty-pg",
  storageBucket: "qwerty-pg.appspot.com",
  messagingSenderId: "657875422017",
  appId: "1:657875422017:web:2adacafc4f108348b8afc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




const auth = getAuth();



function submit() {

  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  console.log(username);
  /*
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("User Created!")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert("errorMessage");
  
  };*/
}