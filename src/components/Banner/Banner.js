import React from 'react';
import banner from '../../images/de-illustration.png'

const Banner = () => {
   return (
      <div className="banner">
         <div className="banner-bg">
            <div className="container-fluid px-0">
               <div className="row justify-content-center align-items-center">
                  <div className="col-md-6 mb-5 mb-md-0">
                     <div className="text-box">
                        <h1>GET BETTER CARE FOR YOUR <span>HEALTH</span></h1>
                        <p>Maintaining good health should be the primary focus of everyone.</p>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <img className="img-fluid" src={banner} alt="" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;