import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyD1cB5zH8cT6CKD5PmcgiU3uXTnqDKyJNo",
    authDomain: "crwn-ba49f.firebaseapp.com",
    projectId: "crwn-ba49f",
    storageBucket: "crwn-ba49f.appspot.com",
    messagingSenderId: "749961146719",
    appId: "1:749961146719:web:64375f98a41094fdc3c6ea",
    measurementId: "G-0WB9JRJXJX"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle =()=> auth.signInWithPopup(provider);

  export default firebase;
  