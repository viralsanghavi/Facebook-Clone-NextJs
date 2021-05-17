import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAohGW8LrIUUEymgK6__lNwIrJDhHkT-fI",
  authDomain: "facebooknext-64d87.firebaseapp.com",
  projectId: "facebooknext-64d87",
  storageBucket: "facebooknext-64d87.appspot.com",
  messagingSenderId: "323166932988",
  appId: "1:323166932988:web:7da7e9632c357038626c79",
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
