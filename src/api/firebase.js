import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import {
  getFirestore,
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
  getDoc
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-pKsjCXAWmVoeC5Vx82wUNUSTbDF8Ack",
  authDomain: "deploys-bootcamp-jared.firebaseapp.com",
  projectId: "deploys-bootcamp-jared",
  storageBucket: "deploys-bootcamp-jared.appspot.com",
  messagingSenderId: "322212227952",
  appId: "1:322212227952:web:bc172594a551ff224cbdb5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

// AUTHENTICATION WITH FIREBASE

export const auth = getAuth(app)
const authProvider = new GoogleAuthProvider()

export const login = async () => {
  authProvider.setCustomParameters({ prompt: "select_account" })
  const res = await signInWithPopup(auth, authProvider)
  return res.user
}

export const logout = async () => await signOut(auth)


// CRUD WITH FIREBASE

const userCollection = collection(db, "users")

export const getData = async () => {
  const snapshot = await getDocs(userCollection)
  const data = []
  snapshot.docs.forEach(d => {
    const user = d.data()
    user.id = d.id
    data.push(user)
    /*     data.push(doc.data({...user, id})) */
  })
  return { data }
}

export const createUser = async ({ username, name, age }) => await addDoc(userCollection, { username, name, age })

export const deleteUser = async (id) => await deleteDoc(doc(userCollection, id))

export const updateUser = async (id, { username, name, age }) => await setDoc(doc(userCollection, id), { username, name, age })

export const getUserDetails = async (id) => {

  const snapshot = await getDoc(doc(userCollection, id))
  const user = snapshot.data()
  user.id = snapshot.id
  return { data: user }

}