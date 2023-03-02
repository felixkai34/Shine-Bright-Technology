import Aboutservice from "../components/Aboutservice";
import imgone from "../../img/our_service_1.png"
import imgtwo from "../../img/our_service_2.png"
import imgthree from "../../img/our_service_3.png"
import imgfour from "../../img/our_service_4.png"
import src from "../../img/mainimg.jpeg"


const Service = props => {

    const datas = [
        {id:1,title:"Research & analytics",subtitle:"We immerse ourselves in the analytics of your business, in order to study all the subtleties and determine target audience.",src:imgone},
        {id:2,title:"Product design",subtitle:"We know how to create complex and intuitive interface systems that are enjoyable to use.",src:imgtwo},
        {id:3,title:"Development & Integration",subtitle:"Our developer team easily subdue developments of any complexity. We dominate all the cycle of development.",src:imgthree},
        {id:4,title:"Support",subtitle:"We provide technical assistance, that will help you to improve, keep the quality and speed of the launched project like website, app or full product.",src:imgfour}
    ];

    return(
        <div>

            <div className="container-lg container-md container-fluid">
                <div className="row mt-5">
                    <div className="col-lg-8 col-12 mx-auto">

                        <h3 className="fw-light headline">Services</h3>
                        <h3 className="mb-5 headline">Our services extend to every aspect of the project developement process.</h3>
                        <img className="headline" src={src} alt="story-img" width={"100%".toString()}/>
                        
                        {datas.map( (data) =><Aboutservice key={data.id} title={data.title} subtitle={data.subtitle} src={data.src}/>)};
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Service;