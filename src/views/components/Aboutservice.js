const Aboutservice = (props) => {
    return(
        <div>

            <div className="row my-5 headline">
                <div className="col-lg-9">
                    <h3>{props.title}</h3>
                    <p>{props.subtitle}</p>

                    <h5 className="mt-5">What we do</h5>
                    
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>Analyze client business</li>
                                <li>Branding Strategy</li>
                                <li>Research opportunites</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>Interface Design</li>
                                <li>E-commerce</li>
                                <li>App for IOS & Andriod</li>
                            </ul>
                        </div>
                    </div>
                </div>        
                <div className="col-lg-3 d-flex justify-content-center align-items-center">
                    <img src={props.src}  alt="" style={{width:200}}/>
                </div>        
            </div>

        </div>
    );
};

export default Aboutservice;