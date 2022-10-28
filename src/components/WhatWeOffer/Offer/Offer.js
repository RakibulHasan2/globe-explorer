import React from 'react';
import './Offer.css'
const Offer = ({offer}) => {
    const {name, img, details} = offer
    console.log(offer)
    return (
        <div className='offer-card'>
            <img src={img} alt="" />
            <div className='text-center'>
                <h3>{name}</h3>
                <p>{details}</p>
                <button className='btn btn-lg btn-outline-dark'>Read More</button>
            </div>
        </div>
    );
};

export default Offer;