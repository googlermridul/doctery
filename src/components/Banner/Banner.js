import React from 'react';
import banner from '../../images/de-illustration.png'

const Banner = () => {
   return (
      <div className="banner">
         <div className="banner-bg">
            <div className="container-fluid px-0">
               <div className="row justify-content-center align-items-center">
                  <div className="col-lg-6 mb-5 mb-lg-0">
                     <div className="text-box">
                        <h1>GET BETTER CARE FOR YOUR <span>HEALTH</span></h1>
                        <h5>Maintaining good health should be the primary focus of everyone.</h5>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <img className="img-fluid" src={banner} alt="" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;