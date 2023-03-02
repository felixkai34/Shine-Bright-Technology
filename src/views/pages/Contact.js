const Contact = props => {
    return(
        <div>
           
           <div className="container-lg container-md container-fluid">

                <div className="row mt-5">
                    <div className="col-lg-8 col-12 mx-auto">

                        <h3 className="fw-light headline">Wazup there</h3>
                        <h3 className="mb-5 headline">We're herre for you , drop as a line.</h3>

                        <div className="row headline">
                            <div className="col-10">

                            <div className="vstack gap-5">
                                <div className="border-bottom py-3">New Business <i className="fas fa-arrow-right float-end"></i> </div>
                                <div className="border-bottom py-3">Send a message<i className="fas fa-arrow-right float-end"></i> </div>
                                <div className="border-bottom py-3">Careers <i className="fas fa-arrow-right float-end"></i></div>
                            </div>

                            </div>
                        </div>

                        <div className="row my-5">
                            <div className="col-lg-3 my-3 text-center headline">
                                <p className="fw-light">General inquiries</p>
                                <h3 className="mb-2">Quick Chat</h3>
                                <span> <i className="fa-brands fa-facebook-messenger"></i> Message on  facebook</span>
                            </div>
                            <div className="col-lg-5 my-3 headline text-center">
                                <p className="fw-light">New Bussiness</p>
                                <h3 className="mb-2">hi@shine&Bright.co</h3>
                                <span> +959 999 999 999 </span>
                            </div>
                            <div className="col-lg-3 my-3 headline text-center">
                                <p className="fw-light">Office</p>
                                <h3 className="mb-2">Yangon</h3>
                                <span>  Yangon , Myanmar</span>
                            </div>

                        </div>

                    </div>
                    
                </div>

            </div>


        </div>
    )
}

export default Contact;