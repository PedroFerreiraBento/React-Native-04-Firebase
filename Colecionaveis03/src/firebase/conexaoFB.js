import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAH3_8qXy5kaFUmDJxNURY-KT1jKnsAcqE",
    authDomain: "colecionaveisfb-5fb10.firebaseapp.com",
    databaseURL: "https://colecionaveisfb-5fb10.firebaseio.com",
    projectId: "colecionaveisfb-5fb10",
    storageBucket: "colecionaveisfb-5fb10.appspot.com",
    messagingSenderId: "1061442808621",
    appId: "1:1061442808621:web:584f1eb3cf2356839b81a4",
    measurementId: "G-QL4N2QZXX5"
  };
  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);

  export const conexaoFS = app.firestore();