import React from 'react';
import whypic from '../../Image/why.jpg';
import './WhyWe.css';

const WhyWe = () => {
    return (
        <div className='row container mx-auto'>
            <h2 className="text-warning pb-5">Why Booking With Us</h2>
            <div className="col-lg-6 col-md-6 col-sm-12 text-start">
                <h2 className="text-warning mb-5">Why You Book Our Package</h2>
                <h5 className="text-secondary"><i className="far fa-thumbs-up me-3 text-primary"></i> All placges and activiates are carefully picked by us.</h5>
                <h5 className="text-secondary"> <i className="far fa-star me-3 text-primary"></i> Best price guaranteee & Hassle free!</h5>
                <h5 className="text-secondary"> <i className="fas fa-dollar-sign me-4 ms-1 text-primary"></i> We are an award winning agency</h5>
                <h5 className="text-secondary"><i className="far fa-heart me-3 text-primary"></i> Trusted by more than 80,000 customers</h5>
                <h5 className="text-secondary"><i className="fas fa-wifi me-3 text-primary"></i> Free Wireless internet in tour Time</h5>
                <h5 className="text-secondary"><i className="fab fa-accessible-icon me-3 text-primary"></i> 100% Guide in Tour Time</h5>
                <h5 className="text-secondary"><i className="fas fa-ticket-alt me-3 text-primary"></i> Ontime Ticketing</h5>
                <h5 className="text-secondary"><i className="far fa-flag me-3 text-primary"></i> Provision of Foreign Currencies</h5>
                <h5 className="text-secondary"><i className="fas fa-list-ol me-3 text-primary"></i> Liaison with Providers of Service</h5>
                <button className="btn btn-primary mt-5 mb-3">Read More</button>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 text-end">
                <img className="w-100 h-75 rounded-3 book-img" src={whypic} alt="why-pic" />
            </div>
        </div>
    );
};

export default WhyWe;