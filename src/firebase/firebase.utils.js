import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey            : "AIzaSyC6rkBbk7PLIXZo8GX3tmwoOal0fX41_1k",
    authDomain        : "crwn-db-e3c95.firebaseapp.com",
    projectId         : "crwn-db-e3c95",
    storageBucket     : "crwn-db-e3c95.appspot.com",
    messagingSenderId : "153439255767",
    appId             : "1:153439255767:web:075ad8b6761bbe47c90492",
    measurementId     : "G-31JSRD4NW1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
