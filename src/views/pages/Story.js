import { NavLink } from "react-router-dom";
import Nextpage from "../components/Nextpage";
import src from "../../img/mainimg.jpeg"

const Story = props => {

    return(
        <div>

            <div className="container-lg container-md container-fluid">
                <div className="row mt-5">
                    <div className="col-lg-8 col-12 mx-auto">

                        <h3 className="fw-light headline">Our Story</h3>
                        <h3 className="mb-5 headline">We Develope complex interface systems for Web,App,Desktop.</h3>
                        <img className="headline" src={src} alt="story-img" width={"100%".toString()}/>
                        
                        <div className="row mt-5 headline">
                            <div className="col-lg-2 col-6">
                                <h1 className="fw-bold">20</h1>
                                <p>Employers</p>
                            </div>
                            <div className="col-lg-5 col-6 headline">
                                <h1 className="fw-bold">5</h1>
                                <p>years of Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-lg container-md container-fluid py-3 py-lg-4">
                <div className="nav col-lg-8 col-12 mx-auto py-5">
                    
                    <Nextpage text={<li className="nav-item"><NavLink className="nav-link" to="/service" style={{fontSize:35}}>Service</NavLink></li>}/>

                </div>
            </div>


        </div>
    )
}

export default Story;