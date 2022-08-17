// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA5tFhS7v7xHaOJWcORNByG-sBzpL_L60",
  authDomain: "syde-kicks.firebaseapp.com",
  projectId: "syde-kicks",
  storageBucket: "syde-kicks.appspot.com",
  messagingSenderId: "66982666406",
  appId: "1:66982666406:web:d6cdc7b6dcdc6dd33fd467",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
