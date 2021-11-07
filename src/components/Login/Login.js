import React from 'react';
import { useLocation, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
   const {signInWithGoogle, setUser, setError, signInWithEmail, getEmail, getPassword, error} = useAuth()
   const location = useLocation()
   const history = useHistory()
   const redirectUrl = location.state?.from || '/'

   const handleGoogleSignIn = () => {
      signInWithGoogle()
      .then(res => {
         setUser(res.user)
         history.push(redirectUrl)
      })
      .catch(err => {
         setError(err.message);
         console.log(err.message);
      });
   }

   const handleSignIn = (e) => {
      e.preventDefault();

      signInWithEmail()
      .then(res => {
         setUser(res.user)
         history.push(redirectUrl)
      })
      .catch(err => {
         setError(err.message);
         console.log(err.message);
      });
   }

   return (
      <div className="container mt-5 pt-5">
         <h1>LOGIN HERE</h1>
         <form onSubmit={handleSignIn}>
            <div className="mb-3">
               <label htmlFor="email" className="form-label">Email</label>
               <input onBlur={getEmail} type="email" className="form-control" id="email" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
               <label htmlFor="password" className="form-label">Password</label>
               <input onBlur={getPassword} type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="universal-btn">Submit</button>
         </form>
         <br />
         <p className="text-danger">{error}</p>
         <button onClick={handleGoogleSignIn} className="btn btn-primary mb-5">SIGN IN WITH GOOGLE</button>
         <p>New user? <Link to="/register">Register</Link></p>
      </div>
   );
};

export default Login;