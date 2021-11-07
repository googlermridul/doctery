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
                     <div className="col-md-6 mb-5 mb-md-0">
                        <img className="img-fluid" src={about} alt="" />
                     </div>
                     <div className="col-md-6">
                        <div className="text-box">
                           <h2>We Are Specialize in Medical Diagnositics</h2>
                           <p>Nulla lacinia sapien a diam ullamcorper, sed congue leo vulputate. Phasellus et ante ultrices, sagittis purus vitae, sagittis quam. Quisque urna lectus, auctor quis tristique tincidunt, semper vel lectus. Mauris eget eleifend massa. Praesent ex felis, laoreet nec tellus in, laoreet commodo ipsum.</p>
                           <ul>
                              <li>Pellentesque placerat, nisi congue vehicula efficitur.</li>
                              <li>Pellentesque placerat, nisi congue vehicula efficitur.</li>
                              <li>Phasellus mattis vitae magna in suscipit. Nam tristique posuere sem, mattis molestie est bibendum.</li>
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