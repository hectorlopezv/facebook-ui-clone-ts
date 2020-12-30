import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBVFCFyGpymuhJ2JUbxfXyJ-cr6nDL54DM",
    authDomain: "facebook-ui-clone.firebaseapp.com",
    projectId: "facebook-ui-clone",
    storageBucket: "facebook-ui-clone.appspot.com",
    messagingSenderId: "175634521835",
    appId: "1:175634521835:web:25ff124aa3b76e7ddbe8ae"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
//provider google
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};