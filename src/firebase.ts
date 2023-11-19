import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDTYC1AHLSTf31jyKRHRXEWDsb0iSLyHCc",
  authDomain: "namkwang-87a2f.firebaseapp.com",
  projectId: "namkwang-87a2f",
  storageBucket: "namkwang-87a2f.appspot.com",
  messagingSenderId: "738670557707",
  appId: "1:738670557707:web:5c6310b48f37c3f5c0a50e",
  measurementId: "G-JHERTB4SHE"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);