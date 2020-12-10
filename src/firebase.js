import firebase from "firebase";
import { firebaseConfig } from "./firebaseConfig";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDYoVkhzZs3DkckQO9Im3sFrmRlHHINanA",
//   authDomain: "my-first-react-app-d605f.firebaseapp.com",
//   databaseURL: "https://my-first-react-app-d605f.firebaseio.com",
//   projectId: "my-first-react-app-d605f",
//   storageBucket: "my-first-react-app-d605f.appspot.com",
//   messagingSenderId: "359350746430",
//   appId: "1:359350746430:web:3b1676e4c220c374a8406f",
//   measurementId: "G-J926SCNPZ4",
// };

export const firebaseApp = firebase.initializeApp(firebaseConfig);
