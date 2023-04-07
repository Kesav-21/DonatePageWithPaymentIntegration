import React from "react";
import icon from '../assets/img/icon.png';
import { Link } from "react-router-dom";

const Header=()=>{
    return(
        <header id="header" className="header-section">
            <div className="header p-3">
                <div className="container-fluid">
            <div className="content-wrap row">
                <div className="col-lg-6 col-12">
                    <div className="site-branding d-flex justify-content-center justify-content-md-start">
                        <Link to="/"><img src={icon} width="30px" height="30px" alt="Brand"/><span className="ms-3">The Smile Foundation</span></Link>
                    </div>
                </div>
               <div className="col-lg-6 col-12 text-end">
                   <ul id="mainmenu" className="nav navbar-nav nav-menu justify-content-md-end justify-content-center">
                        <li className="active"> <Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li> <Link to="/contact">Contact</Link></li>
                        <li><Link to="/donate" className="default-btn">Donate Now</Link></li>
                    </ul>
               </div>
            </div>
        </div>
    </div>
</header>
    )
}

export default Header;