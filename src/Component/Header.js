import React from "react";
import icon from '../assets/img/icon.png';
import Donate from "./Donate";


const Header=()=>{
    return(
        <header id="header" className="header-section p-2">
    <div className="header">
        <div className="container">
            <div className="content-wrap row">
                <div className="col-sm-4 col-12">
                    <div className="site-branding">
                        <a href="/"><img src={icon} width="40px" height="40px" alt="Brand"/><span className="ms-3">The Smile Foundation</span></a>
                    </div>
                </div>
                <div className="col-sm-4"></div>
               <div className="col-sm-4 col-12 text-end">
                   <ul id="mainmenu" className="nav navbar-nav nav-menu">
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