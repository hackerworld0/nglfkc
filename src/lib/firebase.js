import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCui6APOIY2mkYGhL-YrHayCj9faSVOl5o",
  authDomain: "meet-clone-yt.firebaseapp.com",
  projectId: "meet-clone-yt",
  storageBucket: "meet-clone-yt.appspot.com",
  messagingSenderId: "65512780168",
  appId: "1:65512780168:web:f43227ce572cbcb034ca3d",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
