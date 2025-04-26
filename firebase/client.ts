// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSGUpIDAwO_14r23ZGVYCuDotoP-Lem5o",
  authDomain: "prepwise-10daf.firebaseapp.com",
  projectId: "prepwise-10daf",
  storageBucket: "prepwise-10daf.firebasestorage.app",
  messagingSenderId: "124795429815",
  appId: "1:124795429815:web:c76d8885b8ecf58d287e32",
  measurementId: "G-N1HYW8ZQ9S",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
