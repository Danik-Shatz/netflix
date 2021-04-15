import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFrtDpjYr8Cx7O7o_CPc4Yxwd-LS3fkUI",
  authDomain: "netflix-bf6a4.firebaseapp.com",
  databaseURL: "https://netflix-bf6a4.firebaseio.com",
  projectId: "netflix-bf6a4",
  storageBucket: "netflix-bf6a4.appspot.com",
  messagingSenderId: "263151411626",
  appId: "1:263151411626:web:f107a92b72e83784320bd3",
  measurementId: "G-WPG5BSVDDL",
};

const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase };
