import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAWNFnQP_UHKJbKwtY_rY7B9RGCRRzYL8w",
  authDomain: "vue-site-642fb.firebaseapp.com",
  projectId: "vue-site-642fb",
  storageBucket: "vue-site-642fb.appspot.com",
  messagingSenderId: "486829608178",
  appId: "1:486829608178:web:036231d9bd37568e0f546b",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
