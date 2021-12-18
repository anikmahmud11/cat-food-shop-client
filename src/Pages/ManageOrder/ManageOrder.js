import React, { useEffect, useState } from 'react';

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://intense-earth-59600.herokuapp.com/orders')
            .then(res => res.json())
            .then(data =>setOrders(data));
    }, [])

    // delete 
    const handleDeleteOrder = id => {
        fetch(`https://intense-earth-59600.herokuapp.com/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('deleted successfully')
                    const remainingOrders = orders.filter(order => order._id !== id);
                    setOrders(remainingOrders)
                }
            })

    }

    
    return (
        <div>
            <div>
                <h2 className="text-danger m-5 service-header text-center">All Orders</h2>
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

export default ManageOrder;