
import firebase from 'firebase/app'
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyDmIkZU_3N-5eWPbpgBPXoNEVvMhw8iQNE",
    authDomain: "markdown-1e744.firebaseapp.com",
    projectId: "markdown-1e744",
    storageBucket: "markdown-1e744.appspot.com",
    messagingSenderId: "549699307035",
    appId: "1:549699307035:web:8f2bb108e15ad21f22dabe",
    measurementId: "G-FY6NETPT9S"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export  const projectFirestore = firebase.firestore();