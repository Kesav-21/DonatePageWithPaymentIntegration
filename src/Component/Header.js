import React from "react";
import icon from '../assets/img/icon.png';
import Donate from "./Donate";


const Header=()=>{
    return(
        <header id="header" className="header-section">
            <div className="header p-3">
                <div className="container-fluid">
            <div className="content-wrap row">
                <div className="col-lg-6 col-12">
                    <div className="site-branding d-flex justify-content-center justify-content-md-start">
                        <a href="/"><img src={icon} width="30px" height="30px" alt="Brand"/><span className="ms-3">The Smile Foundation</span></a>
                    </div>
                </div>
               <div className="col-lg-6 col-12 text-end">
                   <ul id="mainmenu" className="nav navbar-nav nav-menu justify-content-md-end justify-content-center">
                        <li className="active"> <a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li> <a href="/contact">Contact</a></li>
                        <li><a href="/donate" className="default-btn">Donate Now</a></li>
                    </ul>
               </div>
            </div>
        </div>
    </div>
</header>
    )
}

export default Header;