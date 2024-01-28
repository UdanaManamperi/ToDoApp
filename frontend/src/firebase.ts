// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKd5W2Jspmy27QaSJQuhgViZgRU2Hb0Zk",
    authDomain: "udana-to-do.firebaseapp.com",
    projectId: "udana-to-do",
    storageBucket: "udana-to-do.appspot.com",
    messagingSenderId: "240869395109",
    appId: "1:240869395109:web:efaf64b0356b63475ddb4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {app, auth};