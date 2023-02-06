import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";

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

export const getData = async () => {
  const snapshot = await getDocs(collection(db, "users"))
  const data = []
  snapshot.docs.forEach(doc => {
    const user = doc.data()
    user.id = doc.id
    data.push(user)
    /*     data.push(doc.data({...user, id})) */
  })
  return { data }
}
