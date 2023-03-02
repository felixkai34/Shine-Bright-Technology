const Nextpage = props => {
    return(
        <div className="col-12 text-center py-lg-5 py-3">
            <p className="fw-light">NEXT</p>
            <h3>{props.text}</h3>
            <i className="fas fa-arrow-right"></i>
        </div> 
    )
}

export default Nextpage;