// Firebase App (the core Firebase SDK) is always required and must be listed first


import firebase from "firebase/app";
import 'firebase/firestore';
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyB4RkcSbxSoWwxf3E9-YicAifWh5PzmuTY",
  authDomain: "qchat-8e477.firebaseapp.com",
  projectId: "qchat-8e477",
  storageBucket: "qchat-8e477.appspot.com",
  messagingSenderId: "1095485605477",
  appId: "1:1095485605477:web:b1cda72399eecdd82d288c"
};
  // Initialize Firebase
  
  let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()
export { firebaseAuth, firebaseDb }
 


