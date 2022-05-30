import firebase from 'firebase/app';
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCR9218DdPUpBsBC7mPvuJQ0epFpqRWnYA",
    authDomain: "otp-demo-477ec.firebaseapp.com",
    projectId: "otp-demo-477ec",
    storageBucket: "otp-demo-477ec.appspot.com",
    messagingSenderId: "38456599782",
    appId: "1:38456599782:web:6e3a282a889425c68c4727"
  };
  
  export default firebase.initializeApp(firebaseConfig);