import React from "react";
import { MailOutline,PhoneInTalkOutlined,FacebookOutlined, Twitter, Instagram, LinkedIn } from "@mui/icons-material";


const TopHeader=()=>{
    return(
        <header id="header" class="header-section">
    <div class="top-header">
        <div class="container">
            <div class="top-content-wrap row">
                <div class="col-sm-8">
                    <ul class="left-info">
                        <li><a href="#"><i><MailOutline/></i>Info@YourDomain.com</a></li>
                        <li><a href="#"><i><PhoneInTalkOutlined/></i>+(333) 052 39876</a></li>
                    </ul>
                </div>
                <div class="col-sm-4 d-none d-md-block">
                    <ul class="right-info">
                        <li><a href="#"><i><FacebookOutlined/></i></a></li>
                        <li><a href="#"><i><Twitter/></i></a></li>
                        <li><a href="#"><i><Instagram/></i></a></li>
                        <li><a href="#"><i><LinkedIn/></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</header>
    )
}

export default TopHeader;