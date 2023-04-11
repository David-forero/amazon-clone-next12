import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBN8ECHm5-rOIhafVYHvCGnT14lV85ItYs",
  authDomain: "clone-next-d4fe6.firebaseapp.com",
  projectId: "clone-next-d4fe6",
  storageBucket: "clone-next-d4fe6.appspot.com",
  messagingSenderId: "204762752702",
  appId: "1:204762752702:web:66b4dc907b37ebc317e0ef"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export default db