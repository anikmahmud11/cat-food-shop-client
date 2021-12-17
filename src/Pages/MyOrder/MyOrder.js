import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import './MyOrder.css'

const MyOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                const emails = data.filter(data => data.email === user.email)
                setOrders(emails);
            });
    }, [user.email])
    console.log(orders);

    // delete 
    const handleDeleteOrder = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('Canceled successfully')
                    const remainingOrders = orders.filter(order => order._id !== id);
                   
                    setOrders(remainingOrders)
                   
                }
            })

    }
    return (
        <div>
            <div>
                <h2 className="text-danger m-5 service-header text-center">Your Orders</h2>
                <h4 className="text-danger m-5 service-header text-center">Totall-Order :{orders.length}</h4>
                <div className=" services row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4 m-0 container-fluid">
                    {
                        orders.map(order => <div
                            key={order._id}
                            

                        > <div className='myorder'>
                            <div>
                                <img className='w-50% img-fluid' src={order?.orders?.image} alt="" />
                            </div>
                            <div className='text-start p-3'>
                                <p>Email: {order?.email}</p>
                                <p>Ordered Product: {order?.orders?.name}</p>
                                <p>Product Price {order?.orders?.price}</p>
                            </div>
                        </div>
                           <div className='myorderbtn'>
                           <button>Proceed to Pay</button>
                            <button onClick={() => handleDeleteOrder(order._id)}>Cancel Order</button>
                           </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyOrder;