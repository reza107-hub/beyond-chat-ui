
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_APIKEY,
  authDomain: process.env.NEXT_AUTHDOMAIN,
  projectId: process.env.NEXT_PROJECTID,
  storageBucket: process.env.NEXT_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_MESSAGINGSENDERID,
  appId: process.env.NEXT_APPID,
};


export const app = initializeApp(firebaseConfig);