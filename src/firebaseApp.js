import C from './constants';
import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDfvH44yIqsIl45VmV8dfbH90jF3ybH-QE",
  authDomain: "youfeed-aca14.firebaseapp.com",
  databaseURL: "https://youfeed-aca14.firebaseio.com",
  storageBucket: "youfeed-aca14.appspot.com",
  messagingSenderId: "658536204674"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const database = firebase.database();
