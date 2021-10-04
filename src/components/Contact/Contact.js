import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center fw-bold text-primary fw-2 mt-4">Contact Details</h2>
            <div className="row mt-5">
                <div className=" text-start col-md-5">

                    <h2 className="text-secondary">Get In Touch: </h2>

                    <div className="right-footer-container  ">

                        <div className="phone d-flex justify-content-start align-items-start  mt-4">
                            <div className="foter-phone-icon ">
                                <i className="fas fa-phone-volume me-2"></i>
                            </div>
                            <div>
                                <h5>+8801776524524 </h5>
                            </div>
                        </div>
                        <div className="phone d-flex justify-content-start align-items-start  mt-4">
                            <div className="foter-phone-icon ">
                                <i className="far fa-envelope me-2"></i>
                            </div>
                            <div>
                                <h6>learn@e-cademy.com </h6>
                            </div>
                        </div>
                        <div className="phone d-flex align-items-start justify-content-start mt-4">
                            <div className="foter-phone-icon ">
                                <i className="fas fa-map-marker-alt me-2"></i>
                            </div>
                            <div>
                                <h6>
                                    2750 Quadra Street Victoria Road,
                                    <br /> 102 1st Avenue, New York,Canada
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="col-md-7 border form text-dark fw-bolder p-2">
                    <form>
                   
                   <p className="my-5 text-dark  ">We'll never share your email and password with anyone else.</p>
                    <div className="mb-3 ">
                            <input type="name" placeholder="Enter your name"className=" text-white form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <input type="email" placeholder=" your email address "className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            
                            <input type="password" placeholder="Enter your password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <input type="subject" placeholder="Enter your subject"className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Accept terms and privacy policy</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        </div>

    );
};

export default Contact;