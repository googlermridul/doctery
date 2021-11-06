import React from 'react';
import icon1 from '../../images/feature-icon1.png'
import icon2 from '../../images/feature-icon2.png'
import icon3 from '../../images/feature-icon3.png'

const Feature = () => {
   return (
      <div className="feature">
         <div className="container">
            <div className="header-text text-center">
               <h3>Our Special Features</h3>
               <p>Discover Your Perfect Program In Our Courses.</p>
            </div>
            <div className="row">
               <div className="col-md-4">
                  <div className="feature-box">
                     <div className="icon shadow">
                        <img src={icon1} alt="" />
                     </div>
                     <h5>Online Emergency</h5>
                     <p>A range of courses across gardening, <br /> photography and more.</p>
                  </div>
               </div>
               <div className="col-md-4 my-5 my-md-0">
                  <div className="feature-box">
                     <div className="icon shadow icon2">
                        <img src={icon2} alt="" />
                     </div>
                     <h5>Medication Service</h5>
                     <p>Knowledge discovery that helps you <br /> understand any topic.</p>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="feature-box">
                     <div className="icon shadow icon3">
                        <img src={icon3} alt="" />
                     </div>
                     <h5>24hr Health Program</h5>
                     <p>Experts delivered you the best support <br /> regarding your need.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Feature;