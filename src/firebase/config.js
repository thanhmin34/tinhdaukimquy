import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA0TTdnjqVHg-fU0Wi5ZLm6C9TIgBBpDbU",
  authDomain: "kimquy-4e78c.firebaseapp.com",
  projectId: "kimquy-4e78c",
  storageBucket: "kimquy-4e78c.appspot.com",
  messagingSenderId: "914545086195",
  appId: "1:914545086195:web:dad37df66254ea4ddcf186",
  measurementId: "G-WT58GQQQCP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
