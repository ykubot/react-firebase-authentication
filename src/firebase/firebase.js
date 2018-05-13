import * as firebase from 'firebase';

// const prodConfig = {
//     apiKey: YOUR_API_KEY,
//     authDomain: YOUR_AUTH_DOMAIN,
//     databaseURL: YOUR_DATABASE_URL,
//     projectId: YOUR_PROJECT_ID,
//     storageBucket: '',
//     messagingSenderId: YOUR_MESSAGING_SENDER_ID,
//   };
  
// const devConfig = {
//     apiKey: YOUR_API_KEY,
//     authDomain: YOUR_AUTH_DOMAIN,
//     databaseURL: YOUR_DATABASE_URL,
//     projectId: YOUR_PROJECT_ID,
//     storageBucket: '',
//     messagingSenderId: YOUR_MESSAGING_SENDER_ID,
// };
  
//   const config = process.env.NODE_ENV === 'production'
//     ? prodConfig
//     : devConfig;

const config = {
    apiKey: "AIzaSyDstUV7x0kXXSt8lTWiWTtSCqeAh6HNX5c",
    authDomain: "react-firebase-authentic-15758.firebaseapp.com",
    databaseURL: "https://react-firebase-authentic-15758.firebaseio.com",
    projectId: "react-firebase-authentic-15758",
    storageBucket: "react-firebase-authentic-15758.appspot.com",
    messagingSenderId: "262631857795"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.database();

export {
  auth,
  db
};
