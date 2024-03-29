import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
    return (
       
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6 text-start mt-5 banner-text">
                   <p>Need-It-Now</p>
                   <h1>Quality Food For Your Cat.</h1>
                  <Link to="/shop">
                  <button >Buy Now</button>
                  </Link>
                </div>
                <div className="col-sm-6">
                    <img className='w-75' src="https://i.ibb.co/5vKjk0c/3683.jpg" alt="" />
                </div>
            </div>
            </div>
        
            );
};

            export default Banner;