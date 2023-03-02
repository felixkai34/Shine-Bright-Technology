const Servicecard = props => {
    return(
            <div className="col-lg-3 col-sm-6 mb-4">
                <div className="card pt-4">
                    <img className="mx-4" src={props.src} alt="serviceimg" />
                    <p className="text-center mt-3">{props.title}</p>
                </div>      
            </div>
    )
}

export default Servicecard;