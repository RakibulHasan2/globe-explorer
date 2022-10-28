import React, { useEffect, useState } from 'react';
import Offer from '../Offer/Offer';
import './Offers.css'
const Offers = () => {
    const [offers, setOffer]= useState([]);

    useEffect(() => {
         fetch('https://globe-server.vercel.app/offer')
        .then(res =>res.json())
        .then(data => setOffer(data))
    } ,[])

    // console.log(offers)
    return (
        <div className='container mb-5 mt-5'>
            <h1 className='fw-bold text-center mb-3'>What We Offer</h1>
            <div className='offer-body'>
                {
                    offers.map(offer => <Offer
                    key={offer.id}
                    offer = {offer}
                    ></Offer>)
                }
            </div>
        </div>
    );
};

export default Offers;