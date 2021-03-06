import { getApps, initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_ClXgrMoOO3dXXE2u8SKJHlgvwreE1No",
  authDomain: "coffeestore-app.firebaseapp.com",
  projectId: "coffeestore-app",
  storageBucket: "coffeestore-app.appspot.com",
  messagingSenderId: "60748097594",
  appId: "1:60748097594:web:95e13205a8d407556e2d03",
};

// If it isn't initialized then initialize it
!getApps().length && initializeApp(firebaseConfig);
const db = getFirestore();

export const getItems = async (
  collectionName,
  filterBy,
  filterCondition,
  filterMatch
) => {
  try {
    const itemRef = collection(db, collectionName);
    const q = filterBy
      ? query(itemRef, where(filterBy, filterCondition, filterMatch))
      : query(itemRef);
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (err) {
    console.error(err);
  }
};

export const getItemById = async (collectionName, id) => {
  try {
    const docSnap = await getDoc(doc(db, collectionName, id));
    return { id, ...docSnap.data() };
  } catch (err) {
    console.error(err);
  }
};

export const addDocument = async (collectionName, data) => {
  try {
    return await addDoc(collection(db, collectionName), { ...data });
  } catch (err) {
    console.error(err);
  }
};

// Used update instead of batchupdate because it it have the same operation
// cost for firestore and in my opinion is more legible.
export const updateDocument = async (collectionName, docId, data) => {
  try {
    return await updateDoc(doc(db, collectionName, docId), data);
  } catch (err) {
    console.error(err);
  }
};
