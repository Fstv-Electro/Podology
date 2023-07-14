import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh1b4YUL37hZC9ore0MCQoZb1CcpGb3yw",
  authDomain: "podology-bc144.firebaseapp.com",
  projectId: "podology-bc144",
  storageBucket: "podology-bc144.appspot.com",
  messagingSenderId: "237199141973",
  appId: "1:237199141973:web:d0be98cf6be745f135f8dc",
};

initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");
