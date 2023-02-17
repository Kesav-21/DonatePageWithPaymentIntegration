import React from "react";
import Donate from './Donate'
import slider1 from "../assets/img/slider-1.jpg"
import slider2 from "../assets/img/slider-2.jpg"
import slider3 from "../assets/img/slider-3.jpg"
import icon1 from "../assets/img/icon-1.png";
import icon2 from "../assets/img/icon-2.png";
import icon3 from "../assets/img/icon-3.png";

const Slide=()=>{
    return(
      <React.Fragment>
      <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={slider1} className="d-block w-100" height="600px" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
          <h5 className="wow cssanimation fadeInBottom">Join Us Today</h5>
          <h1 className="wow cssanimation leFadeInRight sequence">Better Life for People</h1>
          <p className="wow cssanimation fadeInTop" data-wow-delay="1s">Help today because tomorrow you may be the one who needs helping! <br/>Forget what you can get and see what you can give.</p>
          <a href="#contact" className="default-btn wow cssanimation fadeInBottom" data-wow-delay="0.8s">Join With Us</a>
          <a href={<Donate/>} className="default-btn wow cssanimation fadeInBottom" data-wow-delay="0.8s">Donet Now</a>
      </div>
    </div>
    <div className="carousel-item">
      <img src={slider2} className="d-block w-100" height="600px" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h1 className="wow cssanimation fadeInTop" data-wow-delay="1s" data-wow-duration="800ms">Together we  <br/>can make a Difference</h1>
        <p className="wow cssanimation fadeInBottom" data-wow-delay="1s">Help today because tomorrow you may be the one who needs helping! <br/>Forget what you can get and see what you can give.</p>
        <a href="#contact" className="default-btn wow cssanimation fadeInBottom" data-wow-delay="0.8s">Join With Us</a>
        <a href={<Donate/>} className="default-btn wow cssanimation fadeInBottom" data-wow-delay="0.8s">Donet Now</a>
      </div>
    </div>
    <div className="carousel-item">
      <img src={slider3} className="d-block w-100" height="600px" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="wow cssanimation fadeInBottom">Join Us Today</h5>
        <h1 className="wow cssanimation lePushReleaseFrom sequence" data-wow-delay="1s">Give a little. Change a lot.</h1>
        <p className="wow cssanimation fadeInTop" data-wow-delay="1s">Help today because tomorrow you may be the one who needs helping! <br/>Forget what you can get and see what you can give.</p>
        <a href="#contact" className="default-btn wow cssanimation fadeInBottom" data-wow-delay="0.8s">Join With Us</a>
        <a href={<Donate/>} className="default-btn wow cssanimation fadeInBottom" data-wow-delay="0.8s">Donet Now</a>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<section className="promo-section bd-bottom">
        <div className="promo-wrap">
           <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6 xs-padding">
                        <div className="promo-content">
                            <img src={icon1} alt="prmo icon"/>
                            <h3>Make Donation</h3>
                            <p>Help today because tomorrow you may be the one who needs helping!</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 xs-padding">
                        <div className="promo-content">
                            <img src={icon2} alt="prmo icon"/>
                            <h3>Fundrising</h3>
                            <p>Help today because tomorrow you may be the one who needs helping! </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 xs-padding">
                        <div className="promo-content">
                            <img src={icon3} alt="prmo icon"/>
                            <h3>Become A Volunteer</h3>
                            <p>Help today because tomorrow you may be the one who needs helping! </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </React.Fragment>
    )
}

export default Slide;