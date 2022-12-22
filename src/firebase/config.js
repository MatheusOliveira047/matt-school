import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAX65kD5SpfCl_DI4Ga7gEK1qKxA9zJ3VQ",
  authDomain: `${process.env.REACT_APP_authDomain}`,
  projectId:`${process.env.REACT_APP_projectId}` ,
  storageBucket:`${process.env.REACT_APP_storageBucket}` ,
  messagingSenderId:`${process.env.REACT_APP_messagingSenderId}` ,
  appId:`${process.env.REACT_APP_appId}`,
  measurementId:`${process.env.REACT_APP_measurementId}`
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };