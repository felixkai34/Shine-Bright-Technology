const Workcard = props => {
    return(
        <div className="col-lg-6 mb-4">
            <div className="card p-3">
                <img src={props.src} alt="work-img" width={"100%".toString()}/>
                <h4 className="fw-light mt-3">{props.subtitle}</h4>
                <h3>{props.title}</h3>
            </div>
        </div>
    )
}

export default Workcard;