import { getFirestore, collection } from "firebase/firestore";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCodYGQMjNGWoQiIllTrUAxjuT6i8ulGbA",
  authDomain: "next-firebase-auth-fd9ff.firebaseapp.com",
  projectId: "next-firebase-auth-fd9ff",
  storageBucket: "next-firebase-auth-fd9ff.appspot.com",
  messagingSenderId: "702207978135",
  appId: "1:702207978135:web:f729a14450f77bf61417d2",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
export const colRef = collection(db, "users");
