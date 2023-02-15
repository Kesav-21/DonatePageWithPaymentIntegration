import React from 'react';
import ScriptTag from 'react-script-tag/lib/ScriptTag';
import '../assets/css/nivo-slider.css';
const Banner=()=>{
    return(
        <React.Fragment>
        <section className="slider-section">
        <div className="slider-wrapper">
            <div id="main-slider" className="nivoSlider">
                <img src="../assets/img/slider-1.jpg" alt="" title="#slider-caption-1"/>
                <img src="../assets/img/slider-2.jpg" alt="" title="#slider-caption-2"/>
                <img src="../assets/img/slider-3.jpg" alt="" title="#slider-caption-3"/>
            </div>    
            <div id="slider-caption-1" className="nivo-html-caption slider-caption">
                <div className="display-table">
                    <div className="table-cell">
                        <div className="container">
                           <div className="slider-text">
                               <h5 className="wow cssanimation fadeInBottom">Join Us Today</h5>
                               <h1 className="wow cssanimation leFadeInRight sequence">Better Life for People</h1>
                                <p className="wow cssanimation fadeInTop" data-wow-delay="1s">Help today because tomorrow you may be the one who needs helping! <br/>Forget what you can get and see what you can give.</p>
                                <a href="#" className="default-btn wow cssanimation fadeInBottom" data-wow-delay="0.8s">Join With Us</a>
                                <a href="#" className="default-btn wow cssanimation fadeInBottom" data-wow-delay="0.8s">Donet Now</a>
                            </div>
                       </div>
                    </div>
                </div>
            </div> 
            <div id="slider-caption-2" className="nivo-html-caption slider-caption">
                <div className="display-table">
                    <div className="table-cell">
                        <div className="container">
                           <div className="slider-text">
                                <h1 className="wow cssanimation fadeInTop" data-wow-delay="1s" data-wow-duration="800ms">Together we  <br/>can make a Difference</h1>
                                <p className="wow cssanimation fadeInBottom" data-wow-delay="1s">Help today because tomorrow you may be the one who needs helping! <br/>Forget what you can get and see what you can give.</p>
                                <a href="#" className="default-btn wow cssanimation fadeInBottom" data-wow-delay="0.8s">Join With Us</a>
                                <a href="#" className="default-btn wow cssanimation fadeInBottom" data-wow-delay="0.8s">Donet Now</a>
                            </div>
                       </div>
                    </div>
                </div>
            </div> 
            <div id="slider-caption-3" className="nivo-html-caption slider-caption">
                <div className="display-table">
                    <div className="table-cell">
                        <div className="container">
                           <div className="slider-text">
                                <h5 className="wow cssanimation fadeInBottom">Join Us Today</h5>
                                <h1 className="wow cssanimation lePushReleaseFrom sequence" data-wow-delay="1s">Give a little. Change a lot.</h1>
                                <p className="wow cssanimation fadeInTop" data-wow-delay="1s">Help today because tomorrow you may be the one who needs helping! <br/>Forget what you can get and see what you can give.</p>
                                <a href="#" className="default-btn wow cssanimation fadeInBottom" data-wow-delay="0.8s">Join With Us</a>
                                <a href="#" className="default-btn wow cssanimation fadeInBottom" data-wow-delay="0.8s">Donet Now</a>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="promo-section bd-bottom">
        <div className="promo-wrap">
           <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6 xs-padding">
                        <div className="promo-content">
                            <img src="../assets/img/icon-1.png" alt="prmo icon"/>
                            <h3>Make Donetion</h3>
                            <p>Help today because tomorrow you may be the one who needs helping!</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 xs-padding">
                        <div className="promo-content">
                            <img src="../assets/img/icon-2.png" alt="prmo icon"/>
                            <h3>Fundrising</h3>
                            <p>Help today because tomorrow you may be the one who needs helping! </p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 xs-padding">
                        <div className="promo-content">
                            <img src="../assets/img/icon-3.png" alt="prmo icon"/>
                            <h3>Become A Volunteer</h3>
                            <p>Help today because tomorrow you may be the one who needs helping! </p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <ScriptTag type="text/javascript" src="../assets/js/main.js"/>
    </React.Fragment>
    )
}

export default Banner;