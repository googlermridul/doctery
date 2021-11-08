import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
   return (
      <div className="footer">
         <div className="footer-bg">
            <div className="container">
               <div className="row">
                  <div className="col-sm-6 col-lg-3 pe-sm-5">
                     <h3 className="logo">Doctery</h3>
                     <p>Doctery is a health care center which provide patient treatment with specialized medical and nursing staff and medical equipment.</p>
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
                           <Link className="link" to="/appointment">Appointment</Link>
                        </li>
                     </ul>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                     <h5>Services</h5>
                     <ul className="navbar-nav">
                        <li className="nav-item">
                           <Link className="link" to="/service">Cardiology</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="link" to="/service">Urology</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="link" to="/service">Neurology</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="link" to="/service">Orthopaedics</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="link" to="/service">Gastroenterology</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="link" to="/service">Dentistry</Link>
                        </li>
                     </ul>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                     <h5>Contact Us</h5>
                     <div className="d-flex">
                        <FontAwesomeIcon className="fa-icon" icon={faMapMarkerAlt} />
                        <p>329 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
                     </div>
                     <div className="d-flex align-items-top">
                        <FontAwesomeIcon className="fa-icon" icon={faPhoneAlt} />
                        <p>1900 654 321.</p>
                     </div>
                     <div className="d-flex align-items-top">
                        <FontAwesomeIcon className="fa-icon" icon={faEnvelope} />
                        <p>support@skola.com</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;