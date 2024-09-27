// Importing the functions need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// My web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEXi5F33-42nqzoGaGSA4x-bK-xZWGvPg",
  authDomain: "REMOVED_PROJECT_ID.firebaseapp.com",
  projectId: "REMOVED_PROJECT_ID",
  storageBucket: "gs://REMOVED_PROJECT_ID.appspot.com", // Updated storage bucket
  messagingSenderId: "776304936141",
  appId: "1:776304936141:web:e07776f6fac3d936735584",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage services
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
