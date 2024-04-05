import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:1000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="mt-5">
            <div className="text-center space-y-2 mt-4">
             <h4 className="text-red-400 font-semibold">Service</h4>
             <h1 className="text-4xl">Our Service Area</h1>
             <p>the majority have suffered alteration in some form, by injected humour, or randomised <br />
             words which do not look even slightly believable. </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-4">
            {
                services.map(service => <ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)
            }
        </div>
        </div>
    );
};

export default Services;