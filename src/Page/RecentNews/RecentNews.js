import React from 'react';
import news1 from '../../Image/1.png';
import news2 from '../../Image/2.png';
import news3 from '../../Image/3.png';

const RecentNews = () => {
    return (
        <div>
            <h2 className="text-warning my-5">Recent News</h2>
            <div className="row container mx-auto">
                <div className="col-lg-4 col-md-6 col-sm-12 text-start">
                    <img className="w-100 mb-3" src={news1} alt="news-pic" />
                    <h4>Enjoy an Awesome Time with Us</h4>
                    <p className="text-secondary">Enjoy an awesome time with us at the CampTerra RV Resort. Try our barbecue stations & taste fresh meat from our Goods Store.</p>
                    <button className="btn btn-danger mb-5">Read More..</button>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 text-start">
                    <img className="w-100 mb-3" src={news2} alt="news-pic" />
                    <h4>Try Out Our boat Service</h4>
                    <p className="text-secondary">
                    Are you interested in learning how to become a better angler and Journey to boat? We will teach you what we has learned in 25 years of Experience.
                    </p>
                    <button className="btn btn-danger mb-5">Read More..</button>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 text-start">
                    <img className="w-100 mb-3" src={news3} alt="news-pic" />
                    <h4>Special Air For Pro Customers</h4>
                    <p className="text-secondary">
                    Are you interested in learning how to become a better angler and Journey to boat? We will teach you what we has learned in 25 years of Experience.
                    </p>
                    <button className="btn btn-danger mb-5">Read More..</button>
                </div>
            </div>
        </div>
    );
};

export default RecentNews;