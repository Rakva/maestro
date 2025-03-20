import "./dictionary.css"
import text from "../../assets/lang/text";
import Carousel from 'react-bootstrap/Carousel';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";

function Dictionary({setDictionaryRef, lang}){    
    
    const myDictionaryRef = useRef(null);
    setDictionaryRef(myDictionaryRef);

    return <div className="dictionary" ref={myDictionaryRef}>
        <Carousel className="dictionary_carousel" indicators={false} data-bs-theme="dark" interval={5000} >
        {
            text.dictionary.map((element,index)=>{
                return <Carousel.Item className="dictionary_carousel_item" key={index}>
                    <Carousel.Caption className="dictionary_carousel_caption">
                        <h3 className="dictionary_carousel_term">{element.term[`${lang}`]}</h3>
                        <h3 className="dictionary_carousel_explanation">{element.explanation[`${lang}`]}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            })
        }
        </Carousel>
    </div>
}

export default Dictionary;