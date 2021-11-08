import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
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
                  <h3 className="name">{name}</h3>
                  <p className="description mb-0">{description}</p>
                  <button className="universal-btn">
                     <Link className="link" to="/appointment">Make an Appointment</Link>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ServiceDetails;