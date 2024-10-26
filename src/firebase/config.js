
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCk5br8Kehw_quVbvQ8bZWZCOacs3hmSH0",
  authDomain: "myapp-4c9d2.firebaseapp.com",
  projectId: "myapp-4c9d2",
  storageBucket: "myapp-4c9d2.appspot.com",
  messagingSenderId: "255837646016",
  appId: "1:255837646016:web:ba139c2638412ed85ad125",
  measurementId: "G-NPEX0XE9JS"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export {db}; 