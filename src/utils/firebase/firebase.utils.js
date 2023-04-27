import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNlLmXA86Xe9Hk007HNLRTaI_jlcgQHIE",
  authDomain: "online-shop-8af4a.firebaseapp.com",
  projectId: "online-shop-8af4a",
  storageBucket: "online-shop-8af4a.appspot.com",
  messagingSenderId: "587054179383",
  appId: "1:587054179383:web:b52d0bac95b17dec7c4bb2",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);

  console.log(userSnapShot.exists());

  //if user data !exits
  // create / set document with the data from userAuth in my collection
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
  //if user data exists
  //return userDocRef
};
