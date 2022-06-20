import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut} from "firebase/auth"
import {getFirestore, query, collection, where, getDocs, addDoc} from "firebase/firestore"
import axios from 'axios'
//console.log(process.env.REACT_APP_ACCESS_KEY)
const firebaseConfig: any = JSON.parse(process.env.REACT_APP_ACCESS_KEY === undefined ? 'No key' : process.env.REACT_APP_ACCESS_KEY)

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
//console.log(db)
const googleProvider = new GoogleAuthProvider();

// const signInWithGoogle = async() =>{
//     try{
//         const response = await signInWithPopup(auth, googleProvider);
//         const user = response.user
//         const q = query(
//             collection(db, "user"),
//             where("uid", "==", user.uid)
//         )
//         const docRef = await getDocs(q)
//         if(docRef.docs.length === 0){
//             await addDoc(
//                 collection(db, "users"),{
//                     uid: user.uid,
//                     name: user.displayName,
//                     authProvider: "google",
//                     email: user.email,
//                 }
//             )
//         }
//     }
//     catch(error){
//         throw new Error(message)
//         //showToast(error.message) Para chakra
//     }
// }

const signInWithEmail = async(email: string, password:string) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error)
    }
}

const signUpWithEmail = async (name: string, company: string, phone: number, place: string, email: string, password: string) =>{
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        const user = response.user;
        const url = `https://api-things-to-do.herokuapp.com/tour-operator/create-tour-operator/${user.uid}`;
        axios.post(url, {
            fullName: name, 
            companyName: company, 
            phoneNumber: phone,
            country: place,
            email: email,
        })
        .then((result) => {
            let value = result.data;
            //console.log(value)
        })
        .catch((error) => {
            console.log(error);
        });
    } catch (error) {
        console.log(error)
    }
}

const resetPassword = async(email: string) =>{
    try {
        await sendPasswordResetEmail(auth, email)
    } catch (error) {
        console.error(error)
    }
}

const logout = async() =>{
    try {
        await signOut(auth)
    } catch (error) {
        
    }
}
export {
    auth, 
    db,
    signInWithEmail,
    signUpWithEmail, 
    resetPassword,
    logout
}