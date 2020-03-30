import * as firebase from 'firebase';
import firestore from 'firebase/firestore'


const config = {
    apiKey: "AIzaSyBm1_SaOxi7_Zi2nViXQudPscLqb1mNLUw",
    authDomain: "niners-workout.firebaseapp.com",
    databaseURL: "https://niners-workout.firebaseio.com",
    projectId: "niners-workout",
    storageBucket: "niners-workout.appspot.com",
    messagingSenderId: "634415453674",
    appId: "1:634415453674:web:01fb8c8c7157a9cf6fce93"
};
firebase.initializeApp(config);

const db = firebase.firestore();


export default db;