import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc } from "firebase/firestore";

export function registerUser() {
    const signUpUser = (name, email, password) => createUserWithEmailAndPassword(auth, name, email, password)
    .then(context => {
        const newUserRef = doc(db, `users/${context.user.uid}`);
        setDoc(newUserRef, {uid: context.user.uid, email: email, name: name});
    })

    return signUpUser;
}