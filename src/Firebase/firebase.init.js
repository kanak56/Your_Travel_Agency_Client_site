import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseAuthetication = () => {
    initializeApp(firebaseConfig);
};

export default firebaseAuthetication;