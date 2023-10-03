import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDDOcrhWaD2YFqV_0Yw-wfetl60jo8PtP4",
    authDomain: "bankingapp-aea3b.firebaseapp.com",
    projectId: "bankingapp-aea3b",
    storageBucket: "bankingapp-aea3b.appspot.com",
    messagingSenderId: "389513403639",
    appId: "1:389513403639:web:ea8594244c4b76b8ddc7f2"
    
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);