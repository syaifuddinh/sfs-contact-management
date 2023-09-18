// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
import { collection } from 'firebase/firestore'


const firebaseConfig = {

  apiKey: "AIzaSyBPcS_xAtUSn-OFuFtznm3wAe6T_pWYuLM",
  authDomain: "didin-contact.firebaseapp.com",
  projectId: "didin-contact",
  storageBucket: "didin-contact.appspot.com",
  messagingSenderId: "1017441199119",
  appId: "1:1017441199119:web:d21f56163ed05020066f7a"

};

const app = initializeApp(firebaseConfig);
// Initialize Firebase

export const db = getFirestore(app);
export const table = collection;