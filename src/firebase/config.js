//13 creating firebase config file
import firebase from "firebase";


import 'firebase/auth'; //22
<<<<<<< HEAD
import 'firebase/firestore'//24
=======
import 'firebase/firestore'
>>>>>>> 85bc26e52af2c4b9fa90cba5e46342d5e6336695
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//14. paste config file from firebase
const firebaseConfig = {
    apiKey: "AIzaSyBp2LvX7vqB6GbMKpcySxI7pAAZfeXHbh0",
    authDomain: "olx-app-8cdd2.firebaseapp.com",
    projectId: "olx-app-8cdd2",
    storageBucket: "olx-app-8cdd2.appspot.com",
    messagingSenderId: "1087281080958",
    appId: "1:1087281080958:web:42428a4ee20ea78035862f",
    measurementId: "G-FBCFJRQD1Y"
  };
//15. pass firebaseConfig file into firebase.initializeApp then export it
 export default firebase.initializeApp(firebaseConfig)