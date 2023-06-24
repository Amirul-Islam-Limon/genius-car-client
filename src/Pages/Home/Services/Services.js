import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://genious-car-server-gold.vercel.app/services")
        fetch("https://genious-car-server-gold.vercel.app/services")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    console.log("services", services);
    
    return (
        <div>
            <div className='mx-auto text-center w-1/2'>
                <h5 className='text-2xl font-bold text-orange-600'>Service</h5>
                <h2 className='text-5xl font-bold'>Our Service Area</h2>
                <p className='mb-4 mt-2'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-4 grid-col-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center mt-8 mb-12'>
                <button className="btn btn-outline text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500">More Services</button>
            </div>
        </div>
    );
};

export default Services;