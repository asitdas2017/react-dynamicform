import * as firebase from 'firebase';
let config = {
    apiKey: "AIzaSyCm2gQ8A4w2sl9oLDNb-r2Uq6kvSE5C-Ss",
    authDomain: "react-dynamicform.firebaseapp.com",
    databaseURL: "https://react-dynamicform.firebaseio.com",
    projectId: "react-dynamicform",
    storageBucket: "react-dynamicform.appspot.com",
    messagingSenderId: "392058418473"
};
let db_firebase = firebase.initializeApp(config);
export default db_firebase;
