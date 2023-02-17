import React from "react";
import icon from '../assets/img/icon.png';
import Donate from "./Donate";
const Header=()=>{
    return(
        <header id="header" className="header-section">
    <div className="bottom-header">
        <div className="container">
            <div className="bottom-content-wrap row">
                <div className="col-sm-4">
                    <div className="site-branding">
                        <a href="#home"><img src={icon} width="30px" height="30px" alt="Brand"/><span>The Smile Foundation</span></a>
                    </div>
                </div>
               <div className="col-sm-8 text-right">
                   <ul id="mainmenu" className="nav navbar-nav nav-menu">
                        <li className="active"> <a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li> <a href="contact.html">Contact</a></li>
                    </ul>
                    <a href={<Donate/>} className="default-btn">Donet Now</a>
               </div>
            </div>
        </div>
    </div>
</header>
    )
}

export default Header;