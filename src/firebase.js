// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBuUm8yoVxN_GNAi7SFkFLMvbqB5RLsqlo",
  authDomain: "fb-clone-fs.firebaseapp.com",
  projectId: "fb-clone-fs",
  storageBucket: "fb-clone-fs.appspot.com",
  messagingSenderId: "66536649107",
  appId: "1:66536649107:web:db5976859fdf1e1becf866",
  measurementId: "G-EQSCMQ0REH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
//const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
//export default db;
export default firebaseApp;
