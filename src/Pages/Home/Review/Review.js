import React, { useEffect, useState } from 'react';

const Review = () => {
    const [userReviews, setUserReviews] = useState([])
    useEffect(() => {
        fetch('/review.json')
            .then(res => res.json())
            .then(data => setUserReviews(data))
    }, [])
    return (
        <div>
           <h1 className='pt-5'>Reviews</h1>
           <div className=' row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4 m-0 container-fluid'>
               
               {
                   userReviews?.map(review => <div
                   key={review.key}
                   className='customcard shadow'
                   >    
                       <h5 style={{textAlign:"start"}}>{review?.name}</h5>
                       <p style={{textAlign:"start"}}>{review?.details}</p>
                       <p style={{textAlign:"start"}}>{review?.rate}</p>
                       
                   </div>)
               }
           </div>
        </div>
    );
};

export default Review;