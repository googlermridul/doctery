import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import useServices from '../../hooks/useServices';

const ServiceDetails = () => {
   const [services] = useServices()
   const [details, setDetails] = useState({})
   const {serviceId} = useParams()
   
   useEffect(() => {
      if (services.length > 0) {
         const matchedData = services.find(detail => detail.id === parseInt(serviceId))
         setDetails(matchedData);
      }
   }, [services])

   const {image, name, description} = details;

   return (
      <div className="service-details">
         <div className="container">
            <div className="row">
               <div className="col-md-6 mb-5 mb-md-0">
                  <img className="img-fluid rounded" src={image} alt="" />
               </div>
               <div className="col-md-6">
                  <h5 className="name">{name}</h5>
                  <p className="description mb-0">{description}</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ServiceDetails;