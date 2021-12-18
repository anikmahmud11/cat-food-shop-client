import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';

const Review = () => {
    const [userReviews, setUserReviews] = useState([])
    useEffect(() => {
        fetch('https://intense-earth-59600.herokuapp.com/review')
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
                       <h5 style={{textAlign:"start"}}>{review?.email}</h5>
                       <p style={{ textAlign: "start",color:"rgba(255, 127, 80, 0.89)" }}>
                            <small ><Rating
                                initialRating={review?.rating}
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                readonly></Rating></small>
                        </p>
                       <p style={{textAlign:"start"}}>{review?.description}</p>
                       
                   </div>)
               }
           </div>
        </div>
    );
};

export default Review;