import "./dictionary.css"
import text from "../../assets/lang/text";
import Carousel from 'react-bootstrap/Carousel';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import pause from "../../assets/dictionary/pause.png";
import play from "../../assets/dictionary/play.png";
import { useRef, useState } from "react";

function Dictionary({setDictionaryRef, lang}){    
    
    const myDictionaryRef = useRef(null);
    setDictionaryRef(myDictionaryRef);

    const [interval, setInterval] = useState(3000);

    function intervalChecker(interval){
        if (interval === 3000) {
            setInterval(10000000);
        } else setInterval(3000);
    }

    return <div className="dictionary" ref={myDictionaryRef}>
        <div className="dictionary_pause" onClick={()=>{intervalChecker(interval)}}>
            <img src={interval === 3000 ? pause : play} className="dictionary_pause_img" alt="pause play icon"/>
        </div>
        <Carousel className="dictionary_carousel" indicators={true} data-bs-theme="dark">
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