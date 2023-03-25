// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_xGde2u3MpKIF98MnRlyIQ0jni-K27BU",
  authDomain: process.env.REACT_APP_authDomain,
  projectId: "genius-car-f52cb",
  storageBucket: "genius-car-f52cb.appspot.com",
  messagingSenderId: "83040751831",
  appId: "1:83040751831:web:3193723c148d8db5bb2092",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
