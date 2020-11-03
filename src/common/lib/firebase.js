import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAKm9PRVKOcYWsWpC8S7kZchigLskGo5v8",
  authDomain: "fcc-store-2020.firebaseapp.com",
  databaseURL: "https://fcc-store-2020.firebaseio.com",
  projectId: "fcc-store-2020",
  storageBucket: "fcc-store-2020.appspot.com",
  messagingSenderId: "419159189374",
  appId: "1:419159189374:web:73909fd6b6144e1b37352f",
  measurementId: "G-5S42PTQ0LX",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
