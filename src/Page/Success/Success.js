import React from 'react';
import './Success.css';

const Success = () => {
    return (
        <div className="success-bg">
            <h1 className="text-white mb-5">We are Proud Of Our Services</h1>
                <div className="row container mx-auto">
                    <div className="col-md-6 col-sm-12 col-lg-3 bg-white py-4 rounded-3 mx-auto mb-3 small-container">
                        <h5><i className="fas fa-users fs-2 text-primary"></i></h5>
                        <h5>5214+</h5>
                        <h5>Happy Clients</h5>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-3 bg-white py-4 rounded-3 mx-auto mb-3 small-container">
                        <h5><i className="fab fa-discourse fs-2 text-primary" ></i></h5>
                        <h5>4200+</h5>
                        <h5>Amazing Tour</h5>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-3 bg-white py-4 rounded-3 mx-auto mb-3 small-container">
                        <h5><i className="far fa-handshake fs-2 text-primary"></i></h5>
                        <h5>12000+</h5>
                        <h5>In Business</h5>
                    </div>
                </div>
        </div>
    );
};

export default Success;