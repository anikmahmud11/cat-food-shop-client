import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import './Shipping.css'
const Shipping = () => {
    const{user}=useAuth();
    const { serviceId } = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);
    const [singleService, setSingleService] = useState({})

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [])
    useEffect(() => {
        const foundDetails = serviceDetails.find(detail => detail.id == serviceId)
        setSingleService(foundDetails)
    }, [serviceDetails])

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
   
   const onSubmit = data => {
    const service = singleService;
    data.orders= service;
       fetch('http://localhost:5000/orders',{
        method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
       })
       .then(res => res.json())
      .then(result => {
console.log(result);
        if (result.insertedId) {

          alert('Order process successfully')
          reset();

        }
      })
   }
    return (
        <div className='shipping'>
            <div>
                <img className='img-fluid' src={singleService?.image} alt="" />
                <p>Product Name : {singleService?.name}</p>
                <p>Price : ${singleService?.price}</p>
            </div>
            <div>
                <form className="placeOrder-form container  m-0 " onSubmit={handleSubmit(onSubmit)}>

                    <input readOnly className="container-fluid shipping-input" defaultValue={user?.email}  {...register("email",)} />
                    {errors.email && <span className="error">This field is required</span>}
                    <input className="container-fluid shipping-input" placeholder="Address" defaultValue="" {...register("address")} required />
                    <input className="container-fluid shipping-input" placeholder="City" defaultValue="" {...register("city")} required />
                    <input className="container-fluid shipping-input" placeholder="phone number" defaultValue="" {...register("phone")} required />

                    <input className="container-fluid shipping-input bg-success text-white mb-2" type="submit" />
                </form>
            </div>

        </div>
    );
};

export default Shipping;