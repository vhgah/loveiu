import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDI7SR8ngSoG7p_v5xIdeJ7id1Kqs6O-c8",
  authDomain: "blackautumn-307d6.firebaseapp.com",
  projectId: "blackautumn-307d6",
  storageBucket: "blackautumn-307d6.appspot.com",
  messagingSenderId: "564360851751",
  appId: "1:564360851751:web:23ccd83e4ba3e59279f902",
  measurementId: "G-MCKFVVW11J"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };