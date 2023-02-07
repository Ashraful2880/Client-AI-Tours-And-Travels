import React, { useEffect, useState } from 'react';
import Offer from '../Offer/Offer';

const Offers = () => {
    const [offers,setOffers]=useState([]);
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_PATH}/offers`)
        .then(res=>res.json())
        .then(data=>setOffers(data))
    },[])
    return (
        <div>
            <div  className="container row mx-auto pt-4">
                <h2 className="text-warning mb-4">Our Current Package</h2>
                {
                    offers.map((offer)=><Offer key={offer._id} offer={offer}/>)
                }
            </div>
        </div>
    );
};

export default Offers;