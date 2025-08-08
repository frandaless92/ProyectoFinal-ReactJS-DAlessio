import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs9Rzd47jHcVC5P366zmd-Fj1wNm_Q0bU",
  authDomain: "ecommerce-dalessio.firebaseapp.com",
  projectId: "ecommerce-dalessio",
  storageBucket: "ecommerce-dalessio.firebasestorage.app",
  messagingSenderId: "643167582111",
  appId: "1:643167582111:web:237644f1a2dcdfc43eafaa",
  measurementId: "G-DL64BDH05K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();

export default db;
