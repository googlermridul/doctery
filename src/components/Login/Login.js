import React from 'react';
import { useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
   const {signInWithGoogle} = useAuth()
   const location = useLocation()

   return (
      <div style={{marginTop: "178px"}}>
         <h1>LOGIN HERE</h1>
         <button onClick={signInWithGoogle} className="btn btn-primary">SIGN IN WITH GOOGLE</button>
      </div>
   );
};

export default Login;