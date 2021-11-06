import React from 'react';
import { useHistory } from 'react-router-dom';

const Service = ({service}) => {
   const {id, image, name, description} = service;

   const history = useHistory()

   const handleDetails = id => {
      const url = `/service/${id}`
      history.push(url)
   }

   return (
      <div className="col-sm-6 col-lg-4 mx-auto">
         <div className="service-box shadow">
            <img className="img-fluid" src={image} alt="" />
            <div className="info">
               <h5 className="name">{name}</h5>
               <p className="description">{description.slice(0, 80)}</p>
               <button onClick={() => handleDetails(id)} className="btn">Read More</button>
            </div>
         </div>
      </div>
   );
};

export default Service;