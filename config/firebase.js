import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';
// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAKOvEGx3oUKmvffMLbo7dpVqwJ5oY9Saw",
    authDomain: "chat-app-636fa.firebaseapp.com",
    projectId: "chat-app-636fa",
    storageBucket: "chat-app-636fa.appspot.com",
    messagingSenderId: "741907176493",
    appId: "1:741907176493:web:f5f4345a8b1f44cf42aca4",
    measurementId: "G-ZK64Q3B9N7"
  };
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();