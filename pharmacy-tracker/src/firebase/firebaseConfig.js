// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import {FirebaseDataProvider} from 'react-admin-firebase';

import 'firebase/firestore'

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyCRLLDaVK-mIj8GgPlaiWEv9DqbVehXLOM",
  authDomain: "pharmacytracker-e3700.firebaseapp.com",
  projectId: "pharmacytracker-e3700",
  storageBucket: "pharmacytracker-e3700.appspot.com",
  messagingSenderId: "333588286777",
  appId: "1:333588286777:web:d16280bf7ffe54519aace8"
};
const options = [];
export const dataProvider = FirebaseDataProvider(config, options);

// Initialize Firebase
//const fb = initializeApp(firebaseConfig);
//export const db = fb.firestore();
const app = initializeApp(config);
export const db = getFirestore(app);


