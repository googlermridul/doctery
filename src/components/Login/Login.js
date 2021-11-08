import React from 'react';
import { useLocation, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import googleIcon from '../../images/google1.png'

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
      <div className="login">
         <div className="login-bg">
            <div className="container">
               <div className="row">
                  <div className="col">
                     <div className="login-box shadow">
                        <h3>Log in to Doctery</h3>
                        <form onSubmit={handleSignIn}>
                           <div className="form-group">
                              <input onBlur={getEmail} type="email" className="form-control shadow" id="email" aria-describedby="emailHelp" placeholder="Email" required />
                           </div>
                           <div className="form-group">
                              <input onBlur={getPassword} type="password" className="form-control shadow" id="password"  placeholder="Password" required />
                           </div>
                           <button type="submit" className="universal-btn">Submit</button>
                        </form>
                        <hr />
                        <div className="text-center">
                           <p className="text-danger">{error}</p>
                           <button onClick={handleGoogleSignIn} className="universal-btn google-btn shadow"><img src={googleIcon} alt="" /> Login With Google</button>
                           <p className="switcher">New user? <Link to="/register">Register</Link></p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;