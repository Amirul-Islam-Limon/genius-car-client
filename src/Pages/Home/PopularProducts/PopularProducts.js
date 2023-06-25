import React, { useEffect, useState } from 'react';
import PopularProductCard from './PopularProductCard';

const PopularProducts = () => {
    const [popProducts, setPopProducts] = useState([]);

    useEffect(() => {
        fetch("popularProducts.json")
            .then(res => res.json())
            .then(data => setPopProducts(data));
    }, [])

    console.log(popProducts);
    return (
        <div className='mt-12'>
            <div className='w-1/2 text-center mx-auto'>
                <h2 className='text-2xl font-bold text-orange-600'>Popular Products</h2>
                <h1 className='text-5xl font-bold pt-2'>Browse Our Products</h1>
                <p className='pt-5 pb-7'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-4 grid-col-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    popProducts.map(product => <PopularProductCard
                        key={product._id}
                        product={product}
                    ></PopularProductCard>)
                }
            </div>
            <div className='text-center mt-8 mb-12'>
                <button className="btn btn-outline text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500">More Products</button>
            </div>
        </div>
    );
};

export default PopularProducts;