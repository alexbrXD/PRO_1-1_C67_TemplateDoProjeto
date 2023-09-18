import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAzBIqAmyOtbBI0kG1Q_3x5t_8CpHHhdOQ",
    authDomain: "projeto-67-c4ce9.firebaseapp.com",
    databaseURL: "https://projeto-67-c4ce9-default-rtdb.firebaseio.com",
    projectId: "projeto-67-c4ce9",
    storageBucket: "projeto-67-c4ce9.appspot.com",
    messagingSenderId: "1012952743995",
    appId: "1:1012952743995:web:3c4385a165677844d49c1e"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();