import React from "react";

const BottomHeader=()=>{
    return(
        <header id="header" class="header-section">
    <div class="bottom-header">
        <div class="container">
            <div class="bottom-content-wrap row">
                <div class="col-sm-4">
                    <div class="site-branding">
                        <a href="#"><img src="img/logo.png" alt="Brand"/></a>
                    </div>
                </div>
               <div class="col-sm-8 text-right">
                   <ul id="mainmenu" class="nav navbar-nav nav-menu">
                        <li class="active"> <a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li> <a href="contact.html">Contact</a></li>
                    </ul>
                    <a href="#" class="default-btn">Donet Now</a>
               </div>
            </div>
        </div>
    </div>
</header>
    )
}

export default BottomHeader;