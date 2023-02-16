import React, { Fragment } from "react";
import 'animate.css';
import { Link } from "react-router-dom";
import Body from "./Body";


function LandingPage() {
    return (


        <Fragment>


            <div className="container-fluid landing">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 landingText animate__animated animate__fadeInLeft">
                            <h3>Welcome to</h3>
                            <h1>RUN ORDER</h1>
                            <p>An ordering service ready to serve you better</p>
                            <Link to={"/home"} > <button type="button" className="btn btn btn-primary btn-lg button1"> Go to Store</button></Link>

                        </div>
                        <div className="col-lg-6 landingImage mt-5 animate__animated animate__fadeIn">
                            <img className="img-fluid" src="./images/undraw_shopping_app_flsj.svg" alt="" />
                        </div>
                    </div>
                </div>

            </div>



        </Fragment>

    )
}


export default LandingPage;