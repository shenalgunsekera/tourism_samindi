import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCR8Vv11v-jb111e3xjj9hHKxipIm4ZRV0",
  authDomain: "blissfullanka-5d6eb.firebaseapp.com",
  projectId: "blissfullanka-5d6eb",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);