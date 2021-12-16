import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Shipping = () => {
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
        <div>
            <p>{singleService?.name}</p>
            this is shipping
        </div>
    );
};

export default Shipping;