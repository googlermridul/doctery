import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const ServiceSection = () => {
   const [services] = useServices()

   return (
      <div className="service-section">
         <div className="container">
            <div className="header-text text-center mb-5">
               <h3>Our Medical Services</h3>
               <p>Serve the community by improving the quality of life through better health.</p>
            </div>
            <div className="row">
               {
                  services.slice(0, 6).map(service => <Service
                     service={service}
                     key={service.id}></Service> )
               }
            </div>
         </div>
      </div>
   );
};

export default ServiceSection;