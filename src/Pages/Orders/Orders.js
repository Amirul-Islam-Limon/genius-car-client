import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://genious-car-server-gold.vercel.app/orders?email=${user?.email}`, {
            headers: {
                authorization:`Bearer ${localStorage.getItem("genius-token")}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => setOrders(data));
    }, [user?.email,logOut])
    console.log("from orders component",orders);

    const handleDelete = (id) => {
        const confirmation = window.confirm("Are you sure , you want to delete this service?")
        if (confirmation) {
            fetch(`https://genious-car-server-gold.vercel.app/orders/${id}`, {
                method: "DELETE",
                headers: {
                    authorization:`Bearer ${localStorage.getItem("genius-token")}`
                }
                
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingProduct = orders.filter(order => order._id !== id);
                        setOrders(remainingProduct);
                        alert("User deleted successfully")
                    }
                })
                .catch(error => console.log(error));
        }
    }


    const handleStatusUpdate = (id) => {
        fetch(`https://genious-car-server-gold.vercel.app/orders/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "Application/json",
                authorization:`Bearer ${localStorage.getItem("genius-token")}`
            },
            body:JSON.stringify({status:"Approved"})
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remainingOrders = orders.filter(prd => prd._id !== id);
                    const modifiedOrder = orders.find(prd => prd._id === id);
                    modifiedOrder.status = "Approved";
                    const updatedOrders = [modifiedOrder, ...remainingOrders];
                    setOrders(updatedOrders);
                }
        })
    }

    return (
        <div>
            <h3>You have {orders.length} orders.</h3>
            
            <div className="overflow-x-auto">
                <table className="table">
                   
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th>Message</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderRow
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}
                            ></OrderRow>)
                        }
                    </tbody>                   
                </table>
            </div>

        </div>
    );
};

export default Orders;