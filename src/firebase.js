import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBGhK3FryWDokeVVbyABF8HExIB3EOxAsI",
    authDomain: "chat-7f3bc.firebaseapp.com",
    projectId: "chat-7f3bc",
    storageBucket: "chat-7f3bc.appspot.com",
    messagingSenderId: "691184751671",
    appId: "1:691184751671:web:98270e5c907d07bc061bb2"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();