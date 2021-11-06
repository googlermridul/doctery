import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
   const {signInWithGoogle} = useFirebase()

   return (
      <div style={{marginTop: "178px"}}>
         <h1>LOGIN HERE</h1>
         <button onClick={signInWithGoogle} className="btn btn-primary">SIGN IN WITH GOOGLE</button>
      </div>
   );
};

export default Login;