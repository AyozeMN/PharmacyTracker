import { auth, db } from "./firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

export function registerUser() {
    const signUpUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)
    .then(context => {
        const newUserRef = doc(db, `users/${context.user.uid}`);
        setDoc(newUserRef, {uid: context.user.uid});
    })

    return signUpUser;
}