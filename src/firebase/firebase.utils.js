import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyChOpgEM7HwazkQPGQeONBhYyBbAWgc4QE",
    authDomain: "ecommercereact.firebaseapp.com",
    databaseURL: "https://ecommercereact.firebaseio.com",
    projectId: "ecommercereact",
    storageBucket: "",
    messagingSenderId: "429847285285",
    appId: "1:429847285285:web:c080c1df09ae9ac9"
};

export const createUser = async (userAuth, additionalData) => {
    if(!userAuth) return;
    let query = firestore.collection('users').doc(userAuth.uid);
    // let query = firestore.doc(`users/${userAuth.uid}`);
    let queryResponse = await query.get();

    if(!queryResponse.exists) {
        console.log('Adding new user to the database.');
        try {
            const { displayName, email, photoURL } = userAuth;
            const createdAt = new Date();
            await query.set({
                displayName,
                email,
                photoURL,
                createdAt,
                ...additionalData
            });
        } catch(error) {
            console.log(error);
        }
    }
    return query;
}

export const addCollectionAndItems = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            id: doc.id,
            routeName: encodeURI(title.toLowerCase()),
            items,
            title
        }
    });
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    } , {});
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const providerGoogle = new firebase.auth.GoogleAuthProvider();
providerGoogle.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(providerGoogle);

const providerGithub = new firebase.auth.GithubAuthProvider();
providerGithub.setCustomParameters({ customOAuthParameters: 'login'});
export const signInWithGithub = () => auth.signInWithPopup(providerGithub);

export default firebase;