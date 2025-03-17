import { useRef } from "react";
import "./maestro.css"
import Carousel from 'react-bootstrap/Carousel';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import maestro_content from "../../assets/maestro/maestro";

function Maestro({setMaestroRef}){
    const my_maestro = useRef(null);
    setMaestroRef(my_maestro);

    return <div className="maestro" ref={my_maestro}>
        <h1 className="maestro_title">Maestro+</h1>
        <div className="maestro_text">
            {maestro_content.text.map((text,index)=>{
                return <span className="maestro_text_span" key={index}>
                    {text}
                </span>
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

export default Maestro;