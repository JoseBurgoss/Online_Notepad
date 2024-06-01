import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCa4WuEAaP6zy1XWSpW6-v6483Y966TL0I",
  authDomain: "bloc-de-notas-6a550.firebaseapp.com",
  projectId: "bloc-de-notas-6a550",
  storageBucket: "bloc-de-notas-6a550.appspot.com",
  messagingSenderId: "397596332058",
  appId: "1:397596332058:web:55eb8be12e81b9f55d81a3",
  measurementId: "G-DLVZM6EKKP"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;

