import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDc4EwSkMt0zMFtuasEG5zIyZjBbyioweE",
    authDomain: "crwn-db-db434.firebaseapp.com",
    databaseURL: "https://crwn-db-db434.firebaseio.com",
    projectId: "crwn-db-db434",
    storageBucket: "crwn-db-db434.appspot.com",
    messagingSenderId: "112844987985",
    appId: "1:112844987985:web:b45631fb0e25d7f914a270",
    measurementId: "G-MD40GZ27CS"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;