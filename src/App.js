import { Route, Routes } from "react-router-dom";
import Nav from "./views/components/Nav";
import Contact from "./views/pages/Contact";
import Home from "./views/pages/Home";
import Service from "./views/pages/Service";
import Story from "./views/pages/Story";
import "./App.css";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import Footer from "./views/components/Footer";


const App = props => {

    useEffect( () => {
        ScrollReveal().reveal('.headline',{
            origin: 'left',
            distance: '40px',
            duration: 900,
            interval: 200,
            scale: 0.9,
            viewFactor: 0.1,
        });
    } ,[] )

    return(
        <div>

            <Nav/>

            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="story" element={<Story/>}></Route>
                <Route path="service" element={<Service/>}></Route>
                <Route path="contact" element={<Contact/>}></Route>
            </Routes>

            <div className="bg-light">
                <div className="container-lg container-md container-fluid py-4">
                    <div className="row">
                        
                        <Footer/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;