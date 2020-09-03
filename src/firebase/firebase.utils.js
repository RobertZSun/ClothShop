import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDWPlFTjNAQ1A2hOQUBCtTImVcw2ttP2Ic",
  authDomain: "crwn-db-bcd56.firebaseapp.com",
  databaseURL: "https://crwn-db-bcd56.firebaseio.com",
  projectId: "crwn-db-bcd56",
  storageBucket: "crwn-db-bcd56.appspot.com",
  messagingSenderId: "885385365446",
  appId: "1:885385365446:web:ee297cfaf2a4451987d4c7",
  measurementId: "G-FYK3R913Y0",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (userAuth) {
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // console.log(userRef);
    const snapShot = await userRef.get();
    // console.log(snapShot);

    if (!snapShot.exists) {
      console.log("doesnot exitst and creating now");
      const { displayName, email } = userAuth;
      const createdTime = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdTime,
          ...additionalData,
        });
      } catch (error) {
        console.log("error occurred when creating a user: ", error.message);
      }
    }

    return userRef;
  } else {
    return;
  }
};

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectToAdd.forEach((data) => {
    const newDocumentRef = collectionRef.doc();
    batch.set(newDocumentRef, data);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const procesdedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items,
    };
  });
  // console.log(procesdedCollections);
  return procesdedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
