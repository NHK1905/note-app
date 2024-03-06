// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM-WR2ed7q15sPFcQ659dOd0s-2NE2glU",
  authDomain: "note-app-50906.firebaseapp.com",
  projectId: "note-app-50906",
  storageBucket: "note-app-50906.appspot.com",
  messagingSenderId: "978047205683",
  appId: "1:978047205683:web:4c962257ca379ac0f7be46",
  measurementId: "G-PR382WEHYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);