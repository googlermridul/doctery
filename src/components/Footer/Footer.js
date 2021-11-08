import React from 'react';
import { Link } from 'react-router-dom';
// import footerLogo from '../../images/footer-logo.svg'
// import paymentGateway from '../../images/online-payment.png'

const Footer = () => {
   return (
      <div className="footer">
         <div className="footer-bg">
            <div className="container">
               <div className="row">
                  <div className="col-sm-6 col-lg-3">
                     <h3 className="logo">Doctery</h3>
                     <p>Doctery is an medical site which gives various medical treatment regarding your need. It provides more than 500 international services to improve your health.</p>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                     <h5>Useful Links</h5>
                     <ul className="navbar-nav">
                        <li className="nav-item">
                           <Link className="link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="link" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="link" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="link" to="/contact">Contact</Link>
                        </li>
                     </ul>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                     <h5>Contact Us</h5>
                     <p>329 Queensberry Street, <br /> North Melbourne VIC 3051, Australia.</p>
                     <p>1900 654 321</p>
                     <p>support@skola.com</p>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                     {/* <img className="img-fluid" src={paymentGateway} alt="" /> */}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;