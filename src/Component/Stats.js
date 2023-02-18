import React from "react";
import { SentimentSatisfied,VerifiedUser,CurrencyRupee, Comment } from "@mui/icons-material";

const Stats=()=>{
    return(
        <section id="counter" className="counter-section">
        <div className="container">
            <ul className="row counters">
                <li className="col-md-3 col-sm-6 sm-padding">
                    <div className="counter-content">
                        <CurrencyRupee color="secondary" fontSize="large"/>
                        <h3 className="counter text-danger">85389</h3>
                        <h4 className="text-black">Money Donated</h4>
                    </div>
                </li>
                <li className="col-md-3 col-sm-6 sm-padding">
                    <div className="counter-content">
                        <SentimentSatisfied color="secondary" fontSize="large"/>
                        <h3 className="counter text-danger">10693</h3>
                        <h4 className="text-black">Volunteer Around The World</h4>
                    </div>
                </li>
                <li className="col-md-3 col-sm-6 sm-padding">
                    <div className="counter-content">
                        <VerifiedUser color="secondary" fontSize="large"/>
                        <h3 className="counter text-danger">50177</h3>
                        <h4 className="text-black">People Impacted</h4>
                    </div>
                </li>
                <li className="col-md-3 col-sm-6 sm-padding">
                    <div className="counter-content">
                        <Comment color="secondary" fontSize="large"/>
                        <h3 className="counter text-danger">669</h3>
                        <h4 className="text-black">Positive Feedbacks</h4>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    )
}
export default Stats;
