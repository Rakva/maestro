import "./theory.css"
import { useRef } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import theory_text from "../../assets/theory/theory";

function Theory({setTheoryRef}){

    const my_theory = useRef(null);
    setTheoryRef(my_theory);

    return <div className="theory" ref={my_theory}>
        <h1 className="theory_title">Theory</h1>
        <div className="theory_intro">From a theoretical point of view, the Maestro application 
            is based on the foundations presented in <a href="https://dl.acm.org/doi/10.1145/3319535.3354193" target="_blank" className="theory_intro_link">research-article</a>
        , co-authored by Sasa Radomirovic.</div>
        <Carousel className="carousel_main" indicators={true} data-bs-theme="dark" interval={3000}>
            {
                theory_text.map((element,index)=>{
                    return <Carousel.Item className="carousel_item" key={index}>
                        <Carousel.Caption className="carousel_caption">
                            <h3 className="carousel_title">{element.title}</h3>
                            <p className="carousel_text">{element.text}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                })
            }
        </Carousel>
    </div>
} 
export default Theory;