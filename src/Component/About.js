import React from "react";
import prom from '../assets/img/profilem.png';
import prof from '../assets/img/profilef.png';
import Stats from './Stats';

const About=()=>{
    return(
        <div className="about-section">
            <Stats />
        <div className="team-wrapper row">
                    <div className="col-lg-6 sm-padding">
                        <div className="team-wrap row">
                            <div className="col-md-6">
                                <div className="team-details">
                                   <img src={prom}  alt="team"/>
                                    <div className="hover">
                                        <h3>Person 1 <span>Communicator</span></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="team-details">
                                   <img src={prom}  alt="team"/>
                                    <div className="hover">
                                        <h3>Person 2 <span>Certified Reader</span></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="team-details">
                                    <img src={prof}  alt="team"/>
                                    <div className="hover">
                                        <h3>Person 3 <span>Event Creator</span></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="team-details">
                                   <img src={prof}  alt="team"/>
                                    <div className="hover">
                                        <h3>Person 4 <span>Internet Specialist</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 sm-padding">
                        <div className="team-content">
                            <h2>Become a Volunteer?</h2>
                            <h3>Join your hand with us for a better life and beautiful future.</h3>
                            <p>The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor, the abused and the helpless.</p>
                            <ul className="check-list">
                                <li><i className="fa fa-check"></i>We are friendly to each other.</li>
                                <li><i className="fa fa-check"></i>If you join with us,We will give you free training.</li>
                                <li><i className="fa fa-check"></i>Its an opportunity to help poor children.</li>
                                <li><i className="fa fa-check"></i>No goal requirements.</li>
                                <li><i className="fa fa-check"></i>Joining is tottaly free. We dont need any money from you.</li>
                            </ul>
                            <a href="/contact" className="default-btn">Join With Us</a>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default About;