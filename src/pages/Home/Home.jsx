import { useEffect, useState } from "react";
import SearchBarWrapper from "../../components/SearchBarWrapper/SearchBarWrapper";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

function Homepage() {
  const [services, setServices] = useState([]);
  
  useEffect(()=> {
  const fetchData = async () => {
    try {
      const response = await fetch('https://localhost:7231/api/Services/services');
      const data = await response.json();
      setServices(data); // Update state with the fetched data
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);


  return (
  <div className="m-3">
  <SearchBarWrapper/>
  <div className="d-flex">
  {
    services.map((service, index)=> (
      <ServiceCard key={index} service={service}/>
    ))
  }
  </div>
  
  </div>
  )
}

export default Homepage;
