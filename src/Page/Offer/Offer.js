import React from 'react';
import { Link } from 'react-router-dom';
import './Offer.css';

const Offer = ({offer}) => {
    const{url,name,description,_id,cost,duration}=offer;
    return (
        <div className="col-md-6 col-sm-12 col-lg-4 container-fluid position-relative text-start">
            <img className="w-100 border rounded-3 offer-image" src={url} alt="Offer-Imag" />
            <h3 className="my-3 px-2"><i className="fas fa-map-marker-alt text-primary"></i> {name}</h3>
            <h5 className="mb-2 px-2 fw-bold">Duration: <span className="bg-warning px-2 rounded-3">{duration}</span>
            </h5>
            <h5 className="fw-bold px-2">Total Cost: <span className="bg-warning px-2 rounded-3">{cost}$</span></h5>
            <p className="text-secondary px-2">{description.slice(0,120)}</p>
            <button className="btn btn-primary d-block mb-5 rounded-3 mx-2">
                <Link className="text-decoration-none text-light fs-5" to={`/placeorder/${_id}`} >Book Now</Link>
            </button>
        </div>
    );
};

export default Offer;