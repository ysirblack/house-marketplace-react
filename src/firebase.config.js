// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLmzu7sBHwpCE6UUE0QQs_rdH1I37FUx8",
  authDomain: "house-marketplace-app-4cb31.firebaseapp.com",
  projectId: "house-marketplace-app-4cb31",
  storageBucket: "house-marketplace-app-4cb31.appspot.com",
  messagingSenderId: "419975615377",
  appId: "1:419975615377:web:afc996c39e3b32fdb0c030"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFireStore();