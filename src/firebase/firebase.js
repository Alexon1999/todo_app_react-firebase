import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAIpriTTlwr0fUYI9IcYlqcZvxbxqGwoFE',
  authDomain: 'fb-messanger-clone-e352b.firebaseapp.com',
  databaseURL: 'https://fb-messanger-clone-e352b.firebaseio.com',
  projectId: 'fb-messanger-clone-e352b',
  storageBucket: 'fb-messanger-clone-e352b.appspot.com',
  messagingSenderId: '305936574085',
  appId: '1:305936574085:web:e43eeb71338fe7ef90abec',
  measurementId: 'G-B693TPWY8B',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); //data base

export default db;
