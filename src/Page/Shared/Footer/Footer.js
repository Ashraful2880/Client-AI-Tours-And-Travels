import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import logo from '../../../Image/logo.png'

const Footer = () => {
    return (
        <div>
            <div>
                <div className="footer-container py-5">
                    <div className="w-25 mx-auto mb-3">
                        <img className="border border-3 rounded-circle p-2" src={logo} alt="mainLogo" />
                        <Link className="text-primary text-decoration-none" to="/home"><h4>AI Tours & Travels</h4></Link>
                        <hr className="text-warning" />
                    </div>
                    <div className="row container mx-auto">
                        <div className="col-lg-3 col-md-6 col-sm-12 text-start text-white">
                            <h5 className="mb-4 text-info">Contact Information</h5>
                            <p> <i className="fas fa-phone-alt me-2"></i> Bangladesh (+123456789) </p>
                            <p> <i className="fas fa-phone-alt me-2"></i> USA (+987654321)</p>
                            <p> <i className="fas fa-phone-alt me-2"></i> Japan (+546321789)</p>
                            <p> <i className="fas fa-phone-alt me-2"></i> London (+412356987)</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-start text-white">
                            <h5 className="mb-4 text-info">About Us</h5>
                            <p>Our Story</p>
                            <p>Travel Blog & Tips</p>
                            <p>career With Us</p>
                            <p>Be our Partner</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-start text-white">
                            <h5 className="mb-4 text-info">Support</h5>
                            <p>Customer Support</p>
                            <p>Privacy & policy</p>
                            <p>Contact Channel</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-start text-white">
                            <h5 className="mb-4 text-info">Pay Safely with US</h5>
                            <p>SafetyPay provides a secure e-payment method that enables cash sales through a variety of sales channels, for consumers who wish to pay directly through their bank account or in cash without bank account.</p>
                        </div>
                        <hr className="text-white" />
                    </div>
                        <div>
                            <p className="text-white">Copyright &copy; 2021-All Rights Reserved- <a  className="text-warning" href="http://ashrafulislambd.com/">ashrafulislambd.com</a></p>
                        </div>
                    <div className="social-area">
                        <i className="text-white bg-primary mx-1 rounded-circle fs-5 fab fa-facebook">
                        </i>
                        <i className="text-white bg-primary mx-1 rounded-circle fs-5 fab fa-twitter">
                        </i>
                        <i className="text-white bg-primary mx-1 rounded-circle fs-5 fab fa-instagram">
                        </i>
                    </div>
                    <div className="mt-3">
                        <Link className="text-white me-3 pe-3 border-3 border-end" to="/home">Home</Link>
                        <Link className="text-white me-3 pe-3 border-3 border-end" to="/register">Register</Link>
                        <Link className="text-white me-3 pe-3" to="/login">Login</Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Footer;