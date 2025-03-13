// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDKRU3z3zetqqLjfc3JrBxUO2DjQEOGFo",
  authDomain: "portfolio-5352b.firebaseapp.com",
  projectId: "portfolio-5352b",
  storageBucket: "portfolio-5352b.firebasestorage.app",
  messagingSenderId: "292662780708",
  appId: "1:292662780708:web:f0cf5f6fab40be47a609b1",
  measurementId: "G-YQKK9VPPG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);