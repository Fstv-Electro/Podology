import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAh1b4YUL37hZC9ore0MCQoZb1CcpGb3yw",
  authDomain: "podology-bc144.firebaseapp.com",
  projectId: "podology-bc144",
  storageBucket: "podology-bc144.appspot.com",
  messagingSenderId: "237199141973",
  appId: "1:237199141973:web:d0be98cf6be745f135f8dc",
};

initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
