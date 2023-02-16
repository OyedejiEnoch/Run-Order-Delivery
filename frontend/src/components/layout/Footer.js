import React, { Fragment } from "react";


function Footer() {
    const date = new Date().getFullYear()

    return (
        <Fragment>
            <footer>
                <div className="container-fluid footer">
                    <div className="row">
                        <div class="col-lg-4 col-md-6 col-sm-12 ">
                            <h1>About Run Order</h1>
                            <hr></hr>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
                                sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae</p>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <h1>Quick access</h1>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <h1>Follow us on </h1>
                            <a><i class="fa-brands fa-instagram"></i> </a>
                            <a> <i class="fa-brands fa-facebook"></i></a>
                            <a><i class="fa-brands fa-twitter"></i></a>
                        </div>
                    </div>



                    <p className="text-center ">
                        Run Order -{date}, || Techworks,All Rights Reserved
                    </p>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer