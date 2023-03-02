import { NavLink } from "react-router-dom";
import Nextpage from "../components/Nextpage";
import Servicecard from "../components/Servicecard";
import Workcard from "../components/Workcard";
import src from "../../img/mainimg.jpeg"

const Home = props => {

    const workcarddatas = [
        { id:1 , src , subtitle:"e-commerce" , title:"Blue moon" },
        { id:2 , src , subtitle:"e-commerce" , title:"Blue moon" },
        { id:3 , src , subtitle:"e-commerce" , title:"Blue moon" },
        { id:4 , src , subtitle:"e-commerce" , title:"Blue moon" }
    ];

    const servicecarddatas = [
        { id:1 , src , title:"Research and Analysis" },
        { id:2 , src , title:"Research and Analysis" },
        { id:3 , src , title:"Research and Analysis" },
        { id:4 , src , title:"Research and Analysis" }
    ];


    return(
        <main>

            {/* Intro Section */}
            <div className="container-lg container-md container-fluid">
                <div className="row mt-5">
                    <div className="col-lg-8 col-12 mx-auto">

                        <h3 className="fw-light mb-3 headline">IT Company</h3>
                        <h3 className="mb-5 headline">Upgrade Your Business With Shine & Bright Technology</h3>
                        <img className="headline" src={src} alt="home-img" width={"100%".toString()}/>

                    </div>
                </div>
            </div>   

            {/* Work Section */} 

            <div className="bg-light">
                <div className="container-lg container-md container-fluid">
                    <div className="row mt-5">
                        <div className="col-lg-8 col-12 mx-auto">
                            <h2 className="my-5 text- headline">Our work Project</h2>
                            <div className="row headline">
                                {workcarddatas.map( carddata => <Workcard key={carddata.id} src={carddata.src} subtitle={carddata.subtitle} title={carddata.title}/>)}
                            </div>
                        </div>
                        <div className="col-lg-8 col-12 mx-auto">
                            <p className="float-end">
                                MORE CASES <span className="ms-2 moreicons"><i className="fas fa-angle-right"></i></span>
                            </p>
                        </div>
                    </div>
                </div>   
            </div>

            {/* Service Section */}

            <div className="bg-light">
                <div className="container-lg container-md container-fluid py-5">
                    <div className="col-lg-8 col-12 mx-auto">
                        <div className="row">
                            <div className="col-lg-6 headline">
                                <h3>Our Services</h3>
                            </div> 
                            <div className="col-lg-6 headline">
                                <p>As a strategic partner,we create a working product with a thoughtful with a large scale architecture. We lunch ,support and development</p>
                            </div>                      
                        </div>
                        <div className="row mt-4 headline">
                            {servicecarddatas.map( (i) => <Servicecard key={i.id} src={i.src} title={i.title}/> )}
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <p className="float-end">
                                    EXPLORE MORE <span className="ms-2 moreicons"><i className="fas fa-angle-right"></i></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>

            {/* Next Page Section */}
            <div className="container-lg container-md container-fluid py-3 py-lg-4">
                <div className="nav col-lg-8 col-12 mx-auto py-5">
                    
                    <Nextpage text={<li className="nav-item"><NavLink className="nav-link" to="/story" style={{fontSize:35}}>Story</NavLink></li>}/>

                </div>
            </div>    


        </main>
    )
}

export default Home;