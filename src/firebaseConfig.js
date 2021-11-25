import firebase from "firebase/compat/app";
import {getFirestore} from 'firebase/firestore'
import "firebase/compat/storage"
import "firebase/compat/firestore"


export const app= firebase.initializeApp({
    "projectId": "runa-d9f8c",
    "appId": "1:994666451247:web:d12d2c2d9d3badabbb51da",
    "storageBucket": "runa-d9f8c.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyCV4gnq87jWuJHoQxVnLMt5JwNy_jzmsxE",
    "authDomain": "runa-d9f8c.firebaseapp.com",
    "messagingSenderId": "994666451247"
  });

  // Initialize Firebase
export const db = getFirestore(app); 