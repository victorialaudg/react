// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/*const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};*/
const firebaseConfig = {
  apiKey: "AIzaSyBQdTjOLRnpEATxOSH5fD_fdbOLc0Z8aSs",
  authDomain: "react-43635-96732.firebaseapp.com",
  projectId: "react-43635-96732",
  storageBucket: "react-43635-96732.appspot.com",
  messagingSenderId: "176224873279",
  appId: "1:176224873279:web:d1f3f2c92decd63c28018a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);