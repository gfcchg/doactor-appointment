// firebase.js
// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAopo5T1K-OzafHajOF0GU484H9oXolAa0",
  authDomain: "doctor-5a9dc.firebaseapp.com",
  projectId: "doctor-5a9dc",
  storageBucket: "doctor-5a9dc.appspot.com",
  messagingSenderId: "807528765125",
  appId: "1:807528765125:web:6cdf1dfc2ee28087d942ac",
  measurementId: "G-5VXMEVCVEC"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

