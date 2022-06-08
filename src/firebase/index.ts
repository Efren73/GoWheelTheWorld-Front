import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = initializeApp ({
  apiKey: "AIzaSyD0lTphBiNja8eYJDPawwXo95X2C0zhjjk",
  authDomain: "things-to-do-e2e1f.firebaseapp.com",
  projectId: "things-to-do-e2e1f",
  storageBucket: "things-to-do-e2e1f.appspot.com",
  messagingSenderId: "19534654398",
  appId: "1:19534654398:web:1627d33c9cd5c5ea11e7ef"
});

//const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { storage };
