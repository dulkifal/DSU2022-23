import * as firebase from "firebase/app"
import 'firebase/auth';
import { initializeApp } from "firebase/app";


require("firebase/firestore");
 

const firebaseConfig = {
  apiKey: "AIzaSyCCR3Ovxa_BA4W_tqkOZ7WYB3kzwJJn2H0",
  authDomain: "login-9e3fb.firebaseapp.com",
  projectId: "login-9e3fb",
  storageBucket: "login-9e3fb.appspot.com",
  messagingSenderId: "600723353846",
  appId: "1:600723353846:web:de9a257734b678a5173cd7",
  measurementId: "G-9DNF2FRPL6"
};
 

export default function initFirebase() {
   
    firebase.initializeApp(firebaseConfig);
   
}