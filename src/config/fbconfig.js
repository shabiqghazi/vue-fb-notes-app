// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXSAUfBVTqOKt1M14u5pvn_tk63oHnhj4",
  authDomain: "notes-app-4e3e4.firebaseapp.com",
  projectId: "notes-app-4e3e4",
  storageBucket: "notes-app-4e3e4.appspot.com",
  messagingSenderId: "384700263195",
  appId: "1:384700263195:web:42b227cc0ab72f32de81be",
  measurementId: "G-YCNM3DJK9V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
