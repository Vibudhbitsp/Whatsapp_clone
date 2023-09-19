// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyBvG6VF4vl5NgyJkhZc_UGJaaOUfIzIHz0",
    authDomain: "whatsapp-clone-c1604.firebaseapp.com",
    projectId: "whatsapp-clone-c1604",
    storageBucket: "whatsapp-clone-c1604.appspot.com",
    messagingSenderId: "522547829485",
    appId: "1:522547829485:web:28c5c09e53272ae1dfcae4",
    measurementId: "G-EG52170JJ5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;