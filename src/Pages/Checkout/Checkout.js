import React from 'react';
import { useContext } from 'react';
import {useLoaderData} from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Checkout = () => {
    const { user } = useContext(AuthContext);
    const {_id, title, price} = useLoaderData();
    
    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`
        const email = user?.email || "unregister"
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        fetch("https://genious-car-server-gold.vercel.app/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization:`Bearer ${localStorage.getItem("genius-token")}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("Order placed successfully");
                    form.reset();
                }
            })
            .catch(error=> console.error(error))
    }

    return (
        <div>
            <h2 className='text-4xl font-bold text-center pt-7'>You are about to order: {title}</h2>
            <h5 className='text-2xl text-center pb-5'>Price: ${ price}</h5>
            <form onSubmit={handlePlaceOrder}>
                <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-3'>
                <input type="text" name="firstName" placeholder="First Name" className="input input-bordered w-full " />
                <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered w-full " />
                <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full " required />
                <input type="text" name='email' defaultValue={user?.email} readOnly placeholder="Your Email" className="input input-bordered w-full " />
                <textarea type="text" name='message' placeholder="Your Message" className="textarea textarea-bordered textarea-lg w-full col-span-2"/>
                <input className='btn col-span-2 mt-5 mb-7 bg-orange-600 text-white hover:bg-orange-700' type="submit" value="Place Your Order" />
                </div>
            </form>
        </div>
    );
};

export default Checkout;