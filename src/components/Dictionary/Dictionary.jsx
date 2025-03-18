import "./dictionary.css"
import dictionary from "../../assets/dictionary/dictionary";
import Carousel from 'react-bootstrap/Carousel';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Dictionary(){    
    
    return <div className="dictionary">
        <Carousel className="dictionary_carousel" indicators={false} data-bs-theme="dark" interval={5000} >
        {
            dictionary.map((element,index)=>{
                return <Carousel.Item className="dictionary_carousel_item" key={index}>
                    <Carousel.Caption className="dictionary_carousel_caption">
                        <h3 className="dictionary_carousel_term">{element.term}</h3>
                        <h3 className="dictionary_carousel_explanation">{element.explanation}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            })
        }
        </Carousel>
    </div>
}

export default Dictionary;