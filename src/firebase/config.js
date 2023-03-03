// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSDnUy0xh84X1xSYyOgTs-rZeFaVa7mQg",
  authDomain: "react-journal-app-1d393.firebaseapp.com",
  projectId: "react-journal-app-1d393",
  storageBucket: "react-journal-app-1d393.appspot.com",
  messagingSenderId: "1007813532446",
  appId: "1:1007813532446:web:750ad8103b9042c408c70f"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );