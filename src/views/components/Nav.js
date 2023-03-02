import { NavLink } from "react-router-dom";

const Nav = props => {
    return(
        <main className="position-sticky top-0" style={{zIndex:999}}>
            <nav className="bg-light py-3">

                <div className="container-lg d-flex justify-content-between align-items-center">
                    <div>
                        <h4 className="lead">Shine and Bright</h4>
                    </div>

                    <div>
                        <button className="btn border-0 d-lg-none " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive"><i className="fas fa-bars"></i></button>

                        <div className="offcanvas-lg offcanvas-end" tabIndex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title lead" id="offcanvasResponsiveLabel">Shine & Bright</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="nav">
                                    <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/story">Story</NavLink></li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/service">Service</NavLink></li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </nav>
        </main>
    )
};

export default Nav;

