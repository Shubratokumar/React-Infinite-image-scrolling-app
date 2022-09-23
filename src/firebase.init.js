// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZD-OO5p-ys4XJQnn3_5AHTHT9gEZ--JA",
    authDomain: "image-scroll-bce79.firebaseapp.com",
    projectId: "image-scroll-bce79",
    storageBucket: "image-scroll-bce79.appspot.com",
    messagingSenderId: "190446275582",
    appId: "1:190446275582:web:7a5ba52462e031e845ceaf"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;