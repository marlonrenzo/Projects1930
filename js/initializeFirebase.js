// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDCUXt6SdNeEzp0OrYkityF5yAizNrnSw",
    authDomain: "onestop-vancouver.firebaseapp.com",
    databaseURL: "https://onestop-vancouver.firebaseio.com",
    projectId: "onestop-vancouver",
    storageBucket: "onestop-vancouver.appspot.com",
    messagingSenderId: "312086852505",
    appId: "1:312086852505:web:1367eee804946135d55908",
    measurementId: "G-YHKRGD3VWP"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();