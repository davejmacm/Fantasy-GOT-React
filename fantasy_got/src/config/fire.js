import firebase from 'firebase';
// Initialize Firebase
const config = {
  apiKey: "AIzaSyBQBvvRD0fRGLIwG2eF145pcXcDeq0yFxg",
  authDomain: "fantasy-got.firebaseapp.com",
  databaseURL: "https://fantasy-got.firebaseio.com",
  projectId: "fantasy-got",
  storageBucket: "fantasy-got.appspot.com",
  messagingSenderId: "837780020674"
};
const fire = firebase.initializeApp(config);
const db = firebase.firestore();
export default fire;
