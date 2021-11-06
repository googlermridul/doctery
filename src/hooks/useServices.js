import { useState, useEffect} from 'react';

const useServices = () => {
   const [services, setServices] = useState([]);
   useEffect(() => {
      fetch('/fakeData/serviceData.json')
      .then(res => res.json())
      .then(data => setServices(data))
   }, [])

   return [services]
}

export default useServices;