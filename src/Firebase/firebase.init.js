import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.configue";


const initializeFirebase = () => {
    initializeApp(firebaseConfig)
}

export default initializeFirebase;