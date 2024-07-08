import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuoTSVdY9-_KdwS696Qg8sTW089AwAxLc",
  authDomain: "learning-382c6.firebaseapp.com",
  projectId: "learning-382c6",
  storageBucket: "learning-382c6.appspot.com",
  messagingSenderId: "329074041034",
  appId: "1:329074041034:web:45aa32bca1d0c44e965433"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
