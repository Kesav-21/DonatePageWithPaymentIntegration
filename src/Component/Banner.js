import React from 'react';

const Banner=()=>{
    return(
        <React.Fragment>
        <section class="slider-section">
        <div class="slider-wrapper">
            <div id="main-slider" class="nivoSlider">
                <img src="../assets/img/slider-1.jpg" alt="" title="#slider-caption-1"/>
                <img src="../assets/img/slider-2.jpg" alt="" title="#slider-caption-2"/>
                <img src="../assets/img/slider-3.jpg" alt="" title="#slider-caption-3"/>
            </div>
    
            <div id="slider-caption-1" class="nivo-html-caption slider-caption">
                <div class="display-table">
                    <div class="table-cell">
                        <div class="container">
                           <div class="slider-text">
                               <h5 class="wow cssanimation fadeInBottom">Join Us Today</h5>
                               <h1 class="wow cssanimation leFadeInRight sequence">Better Life for People</h1>
                                <p class="wow cssanimation fadeInTop" data-wow-delay="1s">Help today because tomorrow you may be the one who needs helping! <br/>Forget what you can get and see what you can give.</p>
                                <a href="#" class="default-btn wow cssanimation fadeInBottom" data-wow-delay="0.8s">Join With Us</a>
                                <a href="#" class="default-btn wow cssanimation fadeInBottom" data-wow-delay="0.8s">Donet Now</a>
                            </div>
                       </div>
                    </div>
                </div>
            </div> 
            <div id="slider-caption-2" class="nivo-html-caption slider-caption">
                <div class="display-table">
                    <div class="table-cell">
                        <div class="container">
                           <div class="slider-text">
                                <h1 class="wow cssanimation fadeInTop" data-wow-delay="1s" data-wow-duration="800ms">Together we  <br/>can make a Difference</h1>
                                <p class="wow cssanimation fadeInBottom" data-wow-delay="1s">Help today because tomorrow you may be the one who needs helping! <br/>Forget what you can get and see what you can give.</p>
                                <a href="#" class="default-btn wow cssanimation fadeInBottom" data-wow-delay="0.8s">Join With Us</a>
                                <a href="#" class="default-btn wow cssanimation fadeInBottom" data-wow-delay="0.8s">Donet Now</a>
                            </div>
                       </div>
                    </div>
                </div>
            </div> 
            <div id="slider-caption-3" class="nivo-html-caption slider-caption">
                <div class="display-table">
                    <div class="table-cell">
                        <div class="container">
                           <div class="slider-text">
                                <h5 class="wow cssanimation fadeInBottom">Join Us Today</h5>
                                <h1 class="wow cssanimation lePushReleaseFrom sequence" data-wow-delay="1s">Give a little. Change a lot.</h1>
                                <p class="wow cssanimation fadeInTop" data-wow-delay="1s">Help today because tomorrow you may be the one who needs helping! <br/>Forget what you can get and see what you can give.</p>
                                <a href="#" class="default-btn wow cssanimation fadeInBottom" data-wow-delay="0.8s">Join With Us</a>
                                <a href="#" class="default-btn wow cssanimation fadeInBottom" data-wow-delay="0.8s">Donet Now</a>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="promo-section bd-bottom">
        <div class="promo-wrap">
           <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-6 xs-padding">
                        <div class="promo-content">
                            <img src="../assets/img/icon-1.png" alt="prmo icon"/>
                            <h3>Make Donetion</h3>
                            <p>Help today because tomorrow you may be the one who needs helping!</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 xs-padding">
                        <div class="promo-content">
                            <img src="../assets/img/icon-2.png" alt="prmo icon"/>
                            <h3>Fundrising</h3>
                            <p>Help today because tomorrow you may be the one who needs helping! </p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 xs-padding">
                        <div class="promo-content">
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
    </React.Fragment>
    )
}

export default Banner;