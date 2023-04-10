// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import { functions } from "firebase-functions";
// import config from "../env.json";
// import { initializeApp } from "firebase/compat/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFiretore } from "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// if (Object.keys(functions.config()).length) {
//   config = functions.config();
// }
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyDi0JtxfD_H3SgcprzyONxFxL6fJFxQ5eM",
  authDomain: "cafi-8e4b0.firebaseapp.com",
  projectId: "cafi-8e4b0",
  storageBucket: "cafi-8e4b0.appspot.com",
  messagingSenderId: "297397879340",
  appId: "1:297397879340:web:56d201aa36b2c2a454c789",
  measurementId: "G-NQSP90XC0D",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export { app };
