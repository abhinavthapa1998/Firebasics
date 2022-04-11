import firebase from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCodYGQMjNGWoQiIllTrUAxjuT6i8ulGbA",
  authDomain: "next-firebase-auth-fd9ff.firebaseapp.com",
  projectId: "next-firebase-auth-fd9ff",
  storageBucket: "next-firebase-auth-fd9ff.appspot.com",
  messagingSenderId: "702207978135",
  appId: "1:702207978135:web:f729a14450f77bf61417d2"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
export const colRef = collection(db, 'name');


