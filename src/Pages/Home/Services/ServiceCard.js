import React from 'react';
import {Link} from 'react-router-dom'

const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div className="card p-2 w-full bg-base-100 shadow-xl">
            <img src={img} className='rounded-md' alt="Shoes" />
            <div className="pl-0 card-body">
                <h2 className="card-title">{ title}</h2>
                <div className='flex justify-around items-center mt-2'>
                    <p className='text-orange-500 font-semibold'>Price: ${ price}</p>
                    <Link to={`/checkout/${_id}`}><button className="btn btn-primary btn-sm bg-orange-600 hover:bg-orange-700 hover:border-orange-600 border-orange-600">Checkout</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;