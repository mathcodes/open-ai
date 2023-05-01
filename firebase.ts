import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8dXngl0GDFRLrNtRI2EQmDy4a9_ycZwE",
  authDomain: "chatai-b85ce.firebaseapp.com",
  projectId: "chatai-b85ce",
  storageBucket: "chatai-b85ce.appspot.com",
  messagingSenderId: "519697361467",
  appId: "1:519697361467:web:e6124568f6c34b0f4f0a1e"
};

// Initialize Firebase
// if its already initialized, use that one else initialize a new app
// this is a singeton pattern, which is used to avoid multiple instances of the same app
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// from that we are going to get our database object
const db = getFirestore(app);

export { db };