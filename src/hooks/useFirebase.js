import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../firebase/firebaseInit";
import { useEffect } from "react";

initializeAuthentication()

const useFirebase = () => {
   const [user, setUser] = useState({})
   const [error, setError] = useState('')
   const auth = getAuth();
   const googleProvider = new GoogleAuthProvider();

   const signInWithGoogle = () => {
      signInWithPopup(auth, googleProvider)
      .then(res => {
         setUser(res.user)
         console.log(res.user);
      })
      .catch(err => {
         setError(err.message);
         console.log(err.message);
      });
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
            console.log('inside state change', user);
         }
      });
   }, [])

   return {user, error, signInWithGoogle, logOut}
}

export default useFirebase;
