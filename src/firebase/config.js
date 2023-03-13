import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


export const firebaseConfig = {
  apiKey: "process.env.REACT_APP_FB_API_KEY",
  authDomain: "e-shop-c91fc.firebaseapp.com",
  projectId: "e-shop-c91fc",
  storageBucket: "e-shop-c91fc.appspot.com",
  messagingSenderId: "595161368811",
  appId: "1:595161368811:web:fcf094ef5fd1466078d6ae",
  
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;