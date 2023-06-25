import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={person} className="w-4/5 h-full rounded-lg shadow-2xl" alt='' />
                    <img src={parts} className="absolute right-5 top-1/2 border-8 rounded-lg w-3/5 shadow-2xl" alt='' />
                </div>
                <div className='w-1/2'>
                    <h5 className='text-2xl text-orange-600 font-bold'>About Us</h5>
                    <h1 className="text-5xl font-bold mt-4">We are qualified & of experience in this field</h1>
                    <p className="py-6 pb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-primary bg-orange-600 hover:bg-orange-700 hover:border-orange-600 border-orange-600">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;