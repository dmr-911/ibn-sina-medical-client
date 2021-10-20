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

const firebaseConfig = {
  apiKey: "AIzaSyAABuEj5JucmO9K8XrOcpXkPcKTL4hN7KU",
  authDomain: "ibn-sina-medical.firebaseapp.com",
  projectId: "ibn-sina-medical",
  storageBucket: "ibn-sina-medical.appspot.com",
  messagingSenderId: "974602449227",
  appId: "1:974602449227:web:843b8452c15cb0edbb78ce",
};
*/