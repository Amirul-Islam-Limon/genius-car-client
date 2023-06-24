import React from 'react';
import { FaBeer, FaStar } from 'react-icons/fa';

const PopularProductCard = ({product}) => {
    const { _id,title, img, price } = product;
    console.log(product)
    return (
        <div className="card p-2 w-full bg-base-100 shadow-xl">
            <div className='flex justify-center p-5'>
                <img src={img} className='w-1/2 rounded-md' alt="Shoes" />
            </div>
            <div className="pl-0 card-body text-center">
                <div className='flex justify-center text-orange-600'><FaStar /><FaStar/><FaStar/><FaStar/><FaStar/></div>
                <h2 className="card-title justify-center">{ title}</h2>
                <div>
                    <p className='text-orange-500 font-semibold'>Price: ${ price}</p>
                </div>
            </div>
        </div>
    );
};

export default PopularProductCard;