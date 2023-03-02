import { NavLink } from "react-router-dom";

const Footer = props => {
    return(
        <footer className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
                <ul className="nav">
                    <li className="nav-item py-1"><NavLink className="nav-link" to="/">Home</NavLink></li>
                    <li className="nav-item py-1"><NavLink className="nav-link" to="/story">Story</NavLink></li>
                </ul>
            </div>
            <div className="footer-texts col-lg-4 d-flex align-items-center justify-content-center col-md-4 col-sm-12">
                <h5>Shine & Bright</h5>
            </div>
            <div className="col-lg-4  col-md-4 col-sm-12">
                <ul className="nav justify-content-end">
                    <li className="nav-item py-1"><NavLink className="nav-link" to="/service">Service</NavLink></li>
                    <li className="nav-item py-1"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;