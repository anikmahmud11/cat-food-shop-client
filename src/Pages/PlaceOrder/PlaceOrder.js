import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Link, useParams } from 'react-router-dom';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const { serviceId } = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);
    const [singleService, setSingleService] = useState({})

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [])
    useEffect(() => {
        const foundDetails = serviceDetails.find(detail => detail.id == serviceId)
        setSingleService(foundDetails)
    }, [serviceDetails])
    return (
        <div className='placeOrder container'>
            <div className='container'>
                <img className='img-fluid' src={singleService?.image} alt="" />
            </div>
            <div className='container container1'>
                <h1>{singleService?.name}</h1>
                
                <h4 className='text-start' >Review : <Rating
                style={{ color: "rgba(255, 127, 80, 0.89)" }}
                    initialRating={singleService?.rating}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    readonly></Rating>
                </h4>
                <h4 className='text-start'> Price : ${singleService?.price}</h4>
                <h4 className='text-start'>Description :<p style={{fontSize:"17px"}}>{singleService?.description}</p></h4>
                <Link to={`/shipping/${singleService?.id}`}>
                <button>Buy Now</button>
                </Link>
            </div>
        </div>
    );
};

export default PlaceOrder;