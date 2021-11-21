import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Offers from '../Offers/Offers';
import RecentNews from '../RecentNews/RecentNews';
import Success from '../Success/Success';
import WhyWe from '../WhyWe/WhyWe';
const Home = () => {
    return (
        <div>
            <Banner/>
            <Offers/>
            <WhyWe/>
            <Success/>
            <RecentNews/>
            <About/>
        </div>
    );
};

export default Home;