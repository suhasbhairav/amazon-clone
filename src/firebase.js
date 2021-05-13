import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDmfUL2_yOtECJRwWNSCFI-xo2087O4fY0",
    authDomain: "challenge-4b0f2.firebaseapp.com",
    projectId: "challenge-4b0f2",
    storageBucket: "challenge-4b0f2.appspot.com",
    messagingSenderId: "191595786922",
    appId: "1:191595786922:web:a755427c3d86603ec016d3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db, auth};