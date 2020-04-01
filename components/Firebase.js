import * as firebase from 'firebase';
import storage from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyBxTVkEN8bLjiaaLO2rgBdSzwtZsb4cOT4",
    authDomain: "niners-cyber-academy.firebaseapp.com",
    databaseURL: "https://niners-cyber-academy.firebaseio.com",
    projectId: "niners-cyber-academy",
    storageBucket: "niners-cyber-academy.appspot.com",
    messagingSenderId: "844100209960",
    appId: "1:844100209960:web:ead3f13ae248720d82d41d"
};
firebase.initializeApp(firebaseConfig);

const firebaseStorage = firebase.storage();


export default firebaseStorage;