// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVGc5VCBS3PV4yb-Oxc7En3RDfAXoo0gc",
  authDomain: "tarea01-31fa2.firebaseapp.com",
  projectId: "tarea01-31fa2",
  storageBucket: "tarea01-31fa2.appspot.com",
  messagingSenderId: "386207129738",
  appId: "1:386207129738:web:50571450db72850ce7cd73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)