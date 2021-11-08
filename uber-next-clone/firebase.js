// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWETmLZwBeX-eQKPHCT-ApRqdVbO7GU_w",
  authDomain: "uber-next-clone-live-e1c8f.firebaseapp.com",
  projectId: "uber-next-clone-live-e1c8f",
  storageBucket: "uber-next-clone-live-e1c8f.appspot.com",
  messagingSenderId: "778899887355",
  appId: "1:778899887355:web:90e5a57cc9406888e84c5e",
  measurementId: "G-KJZNJ30GJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider() ;
const auth = getAuth();

export { app, provider, auth }