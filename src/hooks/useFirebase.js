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

   const getEmail = e => {
      setEmail(e.target.value);
   }
   const getPassword = e => {
      setPassword(e.target.value);
   }
   const getName = e => {
      setName(e.target.value);
   }

   const signUpWithEmail = () => {
      if (password.length < 6) {
         setError('Password should be at least 6 characters')
      }
      // if (!/^(?=.*[0-9]).*$/.test(password)) {
      //    setError('Password must contain at least one digit')
      // }
      return createUserWithEmailAndPassword(auth, email, password)
   }

   const signInWithGoogle = () => {
      return signInWithPopup(auth, googleProvider)
   }

   const signInWithEmail = () => {
      return signInWithEmailAndPassword(auth, email, password)
   }

   const updateUserName = () => {
      return updateProfile(auth.currentUser, {
         displayName: name
      })
   }

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
   // error diche tai dependency add korchi

   return {user, setUser, error, setError, signInWithGoogle, logOut, signUpWithEmail, getEmail, getPassword, getName, signInWithEmail, updateUserName}
}

export default useFirebase;
