import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseconfig= {
  apiKey: "AIzaSyCtGUIHxCm1fXJj0tEvMChkoDHrRomqkXk",
  authDomain: "react-data-access.firebaseapp.com",
  projectId: "react-data-access",
  storageBucket: "react-data-access.appspot.com",
  messagingSenderId: "16735296294",
  appId: "1:16735296294:web:d2b73d6af59d8ab0cabfe7"
};
firebase.initializeApp(firebaseconfig)
const db= firebase.firestore();



export {
  db
}
