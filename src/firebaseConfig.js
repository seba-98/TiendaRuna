import firebase from "firebase/compat/app";
import {getFirestore} from 'firebase/firestore'
import "firebase/compat/storage"
import "firebase/compat/firestore"


export const app= firebase.initializeApp({
  "apiKey": process.env.REACT_APP_FIREBASE_API_KEY,
  "authDomain": process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  "projectId": process.env.REACT_APP_FIREBASE_PROYECT_ID,
  "storageBucket": process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  "messagingSenderId": process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  "appId": process.env.REACT_APP_APP_FIREBASE_ID,
  "locationId": process.env.REACT_APP_FIREBASE_LOCATION_ID,
  });

  // Initialize Firebase
export const db = getFirestore(app); 




