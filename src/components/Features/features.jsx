import { useRef, useState } from "react";
import "./maestro.css"
import "./features.css"
import features from "../../assets/features/features";
import maestro_content from "../../assets/maestro/maestro";
import Carousel from 'react-bootstrap/Carousel';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Features({setFeaturesRef}){
    const my_features = useRef(null);
    setFeaturesRef(my_features);

    const [selectedFeature, setSelectedFeature] = useState(0);

    return <div className="features" ref={my_features}>
        <h1 className="features_title">Features</h1>
        <div className="features_container">
            {features.map((feature, index)=>{
                return <div className="features_container_text" key={index}>
                    <h3 className="features_list_title">{feature.title}</h3> 
                    <ul className="features_list">
                        {feature.list.map((element, index)=>{
                            return <li 
                                className="features_list_item" 
                                key={index} 
                                onClick={()=>setSelectedFeature(element.id)}>
                                    {element.text}
                            </li>
                        })}
                    </ul>
                </div>
            })}
        </div>
        <Carousel className="maestro_carousel_main" indicators={true} data-bs-theme="dark" interval={3000}>
            {
                maestro_content.pictures.map((element,index)=>{
                    return <Carousel.Item className="maestro_carousel_item" key={index}>
                        <div className="maestro_carousel_caption">
                            <h3 className="maestro_carousel_title">{element.title}</h3>
                            <img src={element.src} alt={index} className="maestro_Carousel_img"/>
                        </div>
                    </Carousel.Item>
                })
            }
        </Carousel>
    </div>
}

export default Features;