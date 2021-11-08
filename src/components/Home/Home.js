import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Feature from '../Feature/Feature';
import ServiceSection from '../ServiceSection/ServiceSection';

const Home = () => {
   return (
      <>
         <Banner></Banner>
         <Feature></Feature>
         <ServiceSection></ServiceSection>
         <Contact></Contact>
      </>
   );
};

export default Home;