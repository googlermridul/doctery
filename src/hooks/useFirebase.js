import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import initializeAuthentication from "../firebase/firebaseInit";
import { useEffect } from "react";

initializeAuthentication()

const useFirebase = () => {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [user, setUser] = useState({})
   const [error, setError] = useState('')
   const auth = getAuth();
   const googleProvider = new GoogleAuthProvider();

   // get email, password and name
   const getEmail = e => setEmail(e.target.value);
   const getPassword = e => setPassword(e.target.value);
   const getName = e => setName(e.target.value);

   // create account with email and password
   const signUpWithEmail = () => {
      if (password.length < 6) {
         setError('Password should be at least 6 characters')
      }
      // if (!/^(?=.*[0-9]).*$/.test(password)) {
      //    setError('Password must contain at least one digit')
      //    return;
      // }
      return createUserWithEmailAndPassword(auth, email, password)
   }

   // sign in with email and password
   const signInWithEmail = () => {
      return signInWithEmailAndPassword(auth, email, password)
   }

   // sign in with google
   const signInWithGoogle = () => {
      return signInWithPopup(auth, googleProvider)
   }

   // update user name to firebase
   const updateUserName = () => {
      return updateProfile(auth.currentUser, {
         displayName: name
      })
   }

   // sign out
   const logOut = () => {
      signOut(auth)
      .then(() => {
         setUser({})
      })
      .catch(err => {
         setError(err.message);
         console.log(err.message);
      });
   }

   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
         if (user) {
            setUser(user)
         }
      });
   }, [auth])

   return {getName, user, setUser, error, setError, getEmail, getPassword, signInWithGoogle, signInWithEmail, signUpWithEmail, logOut, updateUserName}
}

export default useFirebase;      