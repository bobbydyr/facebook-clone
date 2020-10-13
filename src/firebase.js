import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBOCAURUu-2xEqvBL3aOtKjdTEJ2J1_z6I",
    authDomain: "facebook-clone-d8459.firebaseapp.com",
    databaseURL: "https://facebook-clone-d8459.firebaseio.com",
    projectId: "facebook-clone-d8459",
    storageBucket: "facebook-clone-d8459.appspot.com",
    messagingSenderId: "1059624079",
    appId: "1:1059624079:web:109ba9f050609d12384cfa"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;