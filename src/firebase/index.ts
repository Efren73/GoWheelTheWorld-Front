import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = initializeApp (JSON.parse(process.env.REACT_APP_ACCESS_KEY === undefined ? 'No key' : process.env.REACT_APP_ACCESS_KEY));

//const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { storage };
