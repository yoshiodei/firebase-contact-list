import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYfGxDRxvw-33gd0oN8usJEvl-OdO99AU",
    authDomain: "fir-project-3c147.firebaseapp.com",
    projectId: "fir-project-3c147",
    storageBucket: "fir-project-3c147.appspot.com",
    messagingSenderId: "929458248746",
    appId: "1:929458248746:web:9aca68a9697d6997a17753"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;