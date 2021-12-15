import React from 'react';

const Banner2 = () => {
    return (
        <div>
            <div className="container-fluid pt-5">
                <div className="row">

                    <div className="col-sm-6">
                        <img className='w-75' src="https://i.ibb.co/Z8cvBWj/banner2.jpg" alt="" />
                    </div>
                    <div className="col-sm-6  mt-5 banner-text">
                        <p>Feed Your Pet healthy food</p>
                        <h2 style={{color:" rgba(255, 127, 80, 0.89)"}}>To live a long, healthy life, your cat needs proper nutrition. Here are some things to
                            consider when selecting an appropriate diet for your cat.</h2>
                        <button >Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;