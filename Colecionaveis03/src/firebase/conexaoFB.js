import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCY0M3QnPl95SmGIcEqm95EoRoc4l2J8os",
    authDomain: "colecionaveisfb-bea1a.firebaseapp.com",
    databaseURL: "https://colecionaveisfb-bea1a.firebaseio.com",
    projectId: "colecionaveisfb-bea1a",
    storageBucket: "colecionaveisfb-bea1a.appspot.com",
    messagingSenderId: "938210724095",
    appId: "1:938210724095:web:c01de8d85c995ad38124ca",
    measurementId: "G-Z499KMYMWQ"
};

var app = firebase.initializeApp(firebaseConfig);

export const conexaoFS = app.firestore();