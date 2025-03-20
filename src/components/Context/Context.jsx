import "./context.css";
import new_context from "../../assets/context/graph.png"
import { useRef } from "react";
import text from "../../assets/lang/text";

function Context({setContextRef, lang}){
    const my_context = useRef(null);
    setContextRef(my_context);
    return <div className="context" ref={my_context}>

        <div className="context_container">
            <h1 className="context_title">{text.context.title[`${lang}`]}</h1>
            <div className="context_text">
                {text.context.subtext[`${lang}`]}
            </div>
        </div>
        
        <div className="context_image_container">
            <img src={new_context} className="context_img" alt="new context pic"/>
        </div>

    </div>
}

export default Context;