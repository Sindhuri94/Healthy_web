

  // Import the functions you need from the SDKs you need
  import {initializeApp} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
  import {getAnalytics} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
  import {getDatabase} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
  import {ref} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);