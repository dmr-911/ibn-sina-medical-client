import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
} 

export default initializeAuthentication;

/*
const firebaseConfig = {
  apiKey: "AIzaSyBaFbdErGZF687PeYER0o-ylfWGqDraCDc",
  authDomain: "ibn-sina-new.firebaseapp.com",
  projectId: "ibn-sina-new",
  storageBucket: "ibn-sina-new.appspot.com",
  messagingSenderId: "129641788559",
  appId: "1:129641788559:web:173766b277703fbda3acfa"
};
*/