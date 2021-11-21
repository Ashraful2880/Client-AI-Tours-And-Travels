import React from 'react';
import aboutImage from '../../Image/about.jpg';
import './About.css';
import team1 from '../../Image/Team/team1.png';
import team2 from '../../Image/Team/team2.png';
import team3 from '../../Image/Team/team3.png';
import team4 from '../../Image/Team/team4.png';
import team5 from '../../Image/Team/team5.png';
import team6 from '../../Image/Team/team6.png';

const About = () => {
    return (
        <div className="pb-5">
            <h2 className="text-warning pt-3 mb-3">A Few Words About Us</h2>
            <div className="container-fluid row mx-auto">
                <div className="col-sm-12 col-md-12 col-lg-4 mx-auto">
                    <img className="about-img w-100 mt-5 rounded-3 border border-3 h-75 p-3" src={aboutImage} alt="aboutImage" />
                </div>
                <div className=" col-sm-12 col-md-12 col-lg-6 about-text pt-5 rounded-3 px-4 mt-5 h-50">
                    <h2 className="mb-5">AI Tours & Travels</h2>
                    <p className="fs-5 text-secondary text-start">
                    <strong>AI Tours & Travels</strong> is one of the most popular Tour  & Travel Agency in Bangladesh  which has been providing tourism service with a good reputation at the same place since 2016. The skills & Honesty of <strong>AI Tours & Travels</strong> in the travels services is unrivaled
                    </p>
                    <p className="fs-5 text-secondary text-start">
                    We Have  the skilled &  trustworthy organization for Visa  Process ,  Package Tours , Air Tickets , Hotel Booking  in various countries around the world.A group of talented tourism graduate in  <strong>AI Tours & Travels</strong> have made a team to engaged and  better service & always ready to serve .
                    </p>
                    <p className="fs-5 text-secondary text-start">
                        Reminder texts can also help existing patients stay engaged so  they’re more likely to keep their commitment. Messages can be    used for actually scheduling their appointment, as the text    conversation below illustrates
                    </p>
                    <p className="fs-5 text-secondary text-start">
                    <strong>AI Tours & Travels</strong> is one of the most popular Tour  & Travel Agency in Bangladesh  which has been providing tourism service with a good reputation at the same place since 2016. The skills & Honesty of <strong>AI Tours & Travels</strong> in the travels services is unrivaled
                    </p>
                    <p className=" fs-5 text-secondary text-start">
                    We Have  the skilled &  trustworthy organization for Visa  Process ,  Package Tours , Air Tickets , Hotel Booking  in various countries around the world.A group of talented tourism graduate in  <strong>AI Tours & Travels</strong> have made a team to engaged and  better service & always ready to serve .
                    </p>
                    <p className="fs-5 text-secondary text-start">
                        Reminder texts can also help existing patients stay engaged so  they’re more likely to keep their commitment. Messages can be    used for actually scheduling their appointment, as the text    conversation below illustrates
                    </p>
                </div>
            </div>
            <div className="container-fluid">
                <h2 className="text-warning">Our Team Members</h2>
                <div className="row container mx-auto mt-5">
                    <div className="col-lg-4 mt-3">
                        <img className="rounded-circle border border-3 p-1" src={team1} alt="team-pic" />
                        <h5 className="mt-1">MM Shakira</h5>
                        <p>Executive Director</p>
                    </div>
                    <div className="col-lg-4 mt-3">
                        <img className="rounded-circle border border-3 p-1" src={team2} alt="team-pic" />
                        <h5 className="mt-1">Tasnim Kaiser</h5>
                        <p>Manager (Admin)</p>
                    </div>
                    <div className="col-lg-4 mt-3">
                        <img className="rounded-circle border border-3 p-1" src={team3} alt="team-pic" />
                        <h5 className="mt-1">John Doe</h5>
                        <p>General Manager</p>
                    </div>
                    <div className="col-lg-4 mt-3">
                        <img className="rounded-circle border border-3 p-1" src={team4} alt="team-pic" />
                        <h5 className="mt-1">Toma Arnob</h5>
                        <p>Manager (CS)</p>
                    </div>
                    <div className="col-lg-4 mt-3">
                        <img className="rounded-circle border border-3 p-1" src={team5} alt="team-pic" />
                        <h5 className="mt-1">Sunyia Tom</h5>
                        <p>Executive Officer</p>
                    </div>
                    <div className="col-lg-4 mt-3">
                        <img className="rounded-circle border border-3 p-1" src={team6} alt="team-pic" />
                        <h5 className="mt-1">Steve Joe</h5>
                        <p>Vacation Planner</p>
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default About;