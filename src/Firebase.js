import * as firebase from 'firebase/app'
import 'firebase/firebase-firestore'
import 'firebase/firebase-storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs1EKjtjjAWXZVhCRPGBKK7gnbxAAdaY4",
  authDomain: "waldo-12be8.firebaseapp.com",
  databaseURL: "https://waldo-12be8.firebaseio.com",
  projectId: "waldo-12be8",
  storageBucket: "waldo-12be8.appspot.com",
  messagingSenderId: "464683515854",
  appId: "1:464683515854:web:a656911e30c6f158c7f59f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/*FIRESTORE*/

// Initialize FireStore
const db = firebase.firestore();
const imgOneCharacters = db.collection('picture-one').doc('characters')

//Getting characterInfo
export const getCharacters = (callback) => {
  imgOneCharacters.get().then(doc => {
    if (doc.exists) {
      //you need to set hook here
      const data = doc.data().cords
      callback(data)
    } else {
      console.log("No such document!");
    }
  }).catch(function (error) {
    console.log("Error getting document:", error);
  });

}

/* STORAGE */

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

// Create a storage reference from our storage service
var storageRef = storage.ref();
// Get the download URL
var starsRef = storageRef.child('images/picture-one.png');
export const getPicture = (callback) => {
  starsRef.getDownloadURL().then((url) => {
    callback(url)
  }).catch(function (error) {
    switch (error.code) {
      case 'storage/object-not-found':
        // File doesn't exist
        break;

      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;

      case 'storage/canceled':
        // User canceled the upload
        break;

      case 'storage/unknown':
        // Unknown error occurred, inspect the server response
        break;
      default:
        break;
    }
  });
}