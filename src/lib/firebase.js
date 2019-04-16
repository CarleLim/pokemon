import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var config = {
    apiKey: 'AIzaSyC3NU_9LWqWW-gJSBAWx-X_uFFw3nZXlwc',
    authDomain: 'pokemaon-assessment.firebaseapp.com',
    databaseURL: 'https://pokemaon-assessment.firebaseio.com',
    projectId: 'pokemaon-assessment',
    storageBucket: 'pokemaon-assessment.appspot.com',
    messagingSenderId: '565142572796'
  };
  firebase.initializeApp(config)

export const storage = firebase.storage();
export const auth = firebase.auth();
export const db = firebase.database();
export default firebase;