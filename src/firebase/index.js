import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: 'AIzaSyANBgmbVeB5jOUdIW9HXTzrNF104WaDTe0',
    authDomain: 'find-coach-app-c6542.firebaseapp.com',
    projectId: 'find-coach-app-c6542',
    storageBucket: 'find-coach-app-c6542.appspot.com',
    messagingSenderId: '5313574661',
    appId: '1:5313574661:web:be76d9869723412798e96c'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };