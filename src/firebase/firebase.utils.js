import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBG931NP8ccAUkTfDPt9O449BHxa2UtlmY",
  authDomain: "crwn-db-17835.firebaseapp.com",
  databaseURL: "https://crwn-db-17835.firebaseio.com",
  projectId: "crwn-db-17835",
  storageBucket: "crwn-db-17835.appspot.com",
  messagingSenderId: "322237463203",
  appId: "1:322237463203:web:6f260343e6952e2ba79d16",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
