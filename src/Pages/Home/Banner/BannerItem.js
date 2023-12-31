import React from 'react';
import Image1 from '../../../assets/images/banner/1.jpg'

const BannerItem = ({ bannerInfo }) => {
    const {id, prev, next, image} = bannerInfo
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={image} alt='' className="w-full rounded-xl" />
                </div>
                <div className="absolute flex justify-end transform  left-24 bottom-0 top-1/4">
                    <h1 className='text-6xl font-bold text-white'>Affordable <br />Price For Car <br /> Servicing</h1>
                </div>
                <div className="absolute flex justify-end transform w-2/5 left-24 bottom-0 top-2/4">
                    <p className='text-white text-xl mt-7'>There are many variations of passages of available, but the majority have suffered alteration in some form </p>
                </div>
                <div className="absolute flex justify-start transform w-2/5 left-24 bottom-0 top-3/4">
                    <button className="btn btn-primary text-white bg-orange-600 hover:bg-orange-700 hover:border-orange-600 border-orange-600">Discover More</button>
                    <button className="btn btn-outline text-white hover:bg-orange-600 hover:border-orange-600 border-orange-600 ms-2">Latest Project</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href={`#slide${prev}`}className="btn btn-circle mr-5">❮</a> 
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
            </div>
    );
};

export default BannerItem;