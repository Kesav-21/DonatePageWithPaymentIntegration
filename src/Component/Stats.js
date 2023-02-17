import React from "react";

const Stats=()=>{
    return(
        <section id="counter" className="counter-section">
        <div className="container">
            <ul className="row counters">
                <li className="col-md-3 col-sm-6 sm-padding">
                    <div className="counter-content">
                        <i className="ti-money"></i>
                        <h3 className="counter">85389</h3>
                        <h4 className="text-black">Money Donated</h4>
                    </div>
                </li>
                <li className="col-md-3 col-sm-6 sm-padding">
                    <div className="counter-content">
                        <i className="ti-face-smile"></i>
                        <h3 className="counter">10693</h3>
                        <h4 className="text-black">Volunteer Around The World</h4>
                    </div>
                </li>
                <li className="col-md-3 col-sm-6 sm-padding">
                    <div className="counter-content">
                        <i className="ti-user"></i>
                        <h3 className="counter">50177</h3>
                        <h4 className="text-black">People Impacted</h4>
                    </div>
                </li>
                <li className="col-md-3 col-sm-6 sm-padding">
                    <div className="counter-content">
                        <i className="ti-comments"></i>
                        <h3 className="counter">669</h3>
                        <h4 className="text-black">Positive Feedbacks</h4>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    )
}
export default Stats;
