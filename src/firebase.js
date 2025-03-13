// src/firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv6kl4UGSGqt4RsOdp-nyoSPOKKOdLSio",
  authDomain: "portfolio-d080c.firebaseapp.com",
  projectId: "portfolio-d080c",
  storageBucket: "portfolio-d080c.firebasestorage.app",
  messagingSenderId: "942034711703",
  appId: "1:942034711703:web:b1a3bc277a65e4ba5ba5d2",
  measurementId: "G-V1DHYMWCMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export the initialized app if needed elsewhere in your project
export { app, analytics };
