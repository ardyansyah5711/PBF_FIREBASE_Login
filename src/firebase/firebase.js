import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCq1i3f4pC7QwP5uTFdO3SLVruNH66lFeE",
    authDomain: "fir-login-f2506.firebaseapp.com",
    projectId: "fir-login-f2506",
    storageBucket: "fir-login-f2506.appspot.com",
    messagingSenderId: "740032894175",
    appId: "1:740032894175:web:c3ecd0b18b1c7ac162456a",
    measurementId: "G-YE56TNG4B1"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;