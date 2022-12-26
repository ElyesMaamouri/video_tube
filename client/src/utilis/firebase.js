 
import { initializeApp } from "firebase/app";
//Get auth of google
 import {getAuth, GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAaivrQGd0CnvowWAxzoLP0cmYHpWYJNDM",
  authDomain: "video-tube-901b1.firebaseapp.com",
  projectId: "video-tube-901b1",
  storageBucket: "video-tube-901b1.appspot.com",
  messagingSenderId: "718199950106",
  appId: "1:718199950106:web:77df27e99048252626faa3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider()

export default app;