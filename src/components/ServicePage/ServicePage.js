import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const ServicePage = () => {
   const [services] = useServices()

   return (
      <div className="service-page">
         <div className="container">
            <div className="header-text text-center">
               <h3>Our Medical Services</h3>
               <p>Serve the community by improving the quality of life through better health.</p>
            </div>
            <div className="row">
               {
                  services.map(service => <Service
                     service={service}
                     key={service.id}></Service> )
               }
            </div>
         </div>
      </div>
   );
};

export default ServicePage;