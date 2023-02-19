import { LocationCity, Mail, MobileScreenShare } from "@mui/icons-material";
import React from "react";

const Contact=()=>{
    return(
        <div className="row contact-wrap">
            <h3 className="text-center fs-2 text-primary fw-bold">Contact Form</h3>
                    <div className="col-md-6 xs-padding">
                        <div className="contact-info">
                            <h3 className="fw-semibold">Get in touch</h3>
                            <p>The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor, the abused and the helpless.</p>
                            <p>Any Queries or Need to Join Fill out the form Thanks for showing up interest!!</p>
                            <ul>
                                <li><LocationCity fontSize="large" color="primary"/> Chennai</li>
                                <li><MobileScreenShare fontSize="large" color="primary" /> +917010446703</li>
                                <li><Mail fontSize="large" color="primary"/> technowkesav@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 xs-padding">
                        <div className="contact-form">
                            <h3>Drop us a line</h3>
                            <p>Thanks for Showing up Interest in our organisation</p>
                            <form className="form-horizontal">
                                <div className="form-group colum-row row">
                                    <div className="col-sm-6 mt-3">
                                        <input type="text" id="name" name="name" className="form-control" placeholder="Name" required=""/>
                                    </div>
                                    <div className="col-sm-6 mt-3">
                                        <input type="email" id="email" name="email" className="form-control" placeholder="Email" required=""/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12 mt-3">
                                        <textarea id="message" name="message" cols="30" rows="5" className="form-control message" placeholder="Message" required=""></textarea>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12 mt-3">
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Send Message</button>
                                    </div>
                                </div>
                                <div id="form-messages" className="alert" role="alert"></div>
                            </form>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Form Submitted Successfully</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                 </div>
                                <div class="modal-body">Thanks for Showing up Interest</div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                
    )
}

export default Contact