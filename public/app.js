import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDeeZy33xaqtvRFD0WNAgi2L71y8dCpdwI",
  authDomain: "lmc-123.firebaseapp.com",
  databaseURL: "https://lmc-123-default-rtdb.firebaseio.com",
  projectId: "lmc-123",
  storageBucket: "lmc-123.appspot.com",
  messagingSenderId: "274858151494",
  appId: "1:274858151494:web:f45b1fe161254483500447",
  measurementId: "G-98ZY9KCQ83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);