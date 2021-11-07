import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import hamburger from '../../images/menu.png'

const Header = () => {
   const {user, logOut} = useAuth()

   return (
      <nav className="navbar navbar-expand-md fixed-top shadow">
         <div className="container">
            <Link className="link" to="/home">
               <h3 className="logo">Doctery</h3>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <img className="hamburger" src={hamburger} alt="" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav">
                  <li className="nav-item">
                     <Link className="link" to="/home">HOME</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="link" to="/services">SERVICES</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="link" to="/about">ABOUT US</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="link" to="/contact">CONTACT</Link>
                  </li>
                  <li className="nav-item">
                     {
                        user.email ? 
                        <button onClick={logOut}>LOGOUT</button> : 
                        <Link className="link" to="/login">LOGIN</Link>
                     }
                  </li>
                  <li className="nav-item">
                     {
                        user.email && <span>{user.displayName}</span>
                     }
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Header;