import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Products.css'
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://intense-earth-59600.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);
    return (
        <div>
            <div >
                <img className='w-100' src="https://i.ibb.co/CwhKKCv/Cat-Food-Desktop.jpg" alt="" />
            </div>
            <h1 className='pt-5'>Our Products</h1>
            <h4 style={{ textAlign: "start", padding: "10px" }}>Dry Food</h4>
            <div className=' row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4 m-0 container-fluid'>

                {
                    products?.slice(0, 5).map(product => <div
                        key={product.key}
                        className='customcard shadow'
                    >    <img style={{ height: "200px" }} className='w-50%' src={product?.image} alt="" />
                        <h5 style={{ textAlign: "start" }}>{product?.name.slice(0, 30)}...</h5>
                        <p style={{ textAlign: "start" }}>{product?.description.slice(0, 50)}...</p>
                        <p style={{ textAlign: "start",color:"rgba(255, 127, 80, 0.89)" }}>
                            <small ><Rating
                                initialRating={product?.rating}
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                readonly></Rating></small>
                        </p>
                        <p style={{ textAlign: "start" }}>${product?.price}</p>
                        <Link to={`/placeOrder/${product?.id}`}>
                            <button>Buy Now</button>
                        </Link>
                    </div>)
                }
            </div>
            <h4 style={{ textAlign: "start", padding: "20px" }}>Wet Food</h4>
            <div className=' row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4 m-0 container-fluid'>

                {
                    products?.slice(5, 10).map(product => <div
                        key={product.key}
                        className='customcard shadow'
                    >    <img style={{ height: "200px", width: "200px" }} className='w-50%' src={product?.image} alt="" />
                        <h5 style={{ textAlign: "start" }}>{product?.name.slice(0, 20)}...</h5>
                        <p style={{ textAlign: "start" }}>{product?.description.slice(0, 50)}...</p>
                        <p style={{ textAlign: "start",color:"rgba(255, 127, 80, 0.89)" }}>
                            <small ><Rating
                                initialRating={product?.rating}
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                readonly></Rating></small>
                        </p>
                        <p style={{ textAlign: "start" }}>${product?.price}</p>
                        <Link to={`/placeOrder/${product?.id}`}>
                            <button>Buy Now</button>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Products;