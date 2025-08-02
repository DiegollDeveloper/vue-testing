// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
export * as auth from 'firebase/auth'
export * as db from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-IS0Y9WbzuS0RRnbERlbbREt85G8SRmo",
    authDomain: "test-poc-5e324.firebaseapp.com",
    projectId: "test-poc-5e324",
    storageBucket: "test-poc-5e324.firebasestorage.app",
    messagingSenderId: "598083449749",
    appId: "1:598083449749:web:3a350ab27b53665c39fc9c",
    measurementId: "G-R6B7SJCLDF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
