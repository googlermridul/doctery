import React from 'react';
import about from '../../images/about.png'
import Feature from '../Feature/Feature';

const About = () => {
   return (
      <>
         <div className="about">
            <div className="about-bg">
               <div className="container-fluid px-0">
                  <div className="row justify-content-center align-items-center">
                     <div className="col-lg-6 mb-5 mb-lg-0">
                        <img className="img-fluid" src={about} alt="" />
                     </div>
                     <div className="col-lg-6">
                        <div className="text-box">
                           <h2>We Are Specialize in Medical Diagnositics</h2>
                           <p>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for your family healthcare</p>
                           <ul>
                              <li>We provide patient treatment with specialized medical and nursing staff and medical equipment.</li>
                              <li>We treats various diseases including kidney disease, orthopaedics, dental problem, gastritis and heart attack etc.</li>
                              <li>Doctery are always ready to provide you the best health treatment.</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Feature></Feature>
      </>
   );
};

export default About;