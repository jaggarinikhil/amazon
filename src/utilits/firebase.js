// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeOMqTZyySG6a2UkpXRG1dWVDEkFJ48Y4",
  authDomain: "netflixgpt-b3835.firebaseapp.com",
  projectId: "netflixgpt-b3835",
  storageBucket: "netflixgpt-b3835.appspot.com",
  messagingSenderId: "497659080553",
  appId: "1:497659080553:web:561b4601f44e2a907417f8",
  measurementId: "G-BFL67VH8VK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export  const auth = getAuth();
