import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyALZfG_n1n2PEAFIAFTJuZWGjJy2MlddOg",
  authDomain: "vite-chat-e1ea6.firebaseapp.com",
  projectId: "vite-chat-e1ea6",
  storageBucket: "vite-chat-e1ea6.appspot.com",
  messagingSenderId: "54379059626",
  appId: "1:54379059626:web:66bc5ebc1129e4ec9373d3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getDatabase();
export const databaseref = ref;
