import "./context.css";
import new_context from "../../assets/context/new.png"
import { useRef } from "react";

function Context({setContextRef}){
    const my_context = useRef(null);
    setContextRef(my_context);
    return <div className="context" ref={my_context}>
        <div className="context_container">
            <h1 className="context_title">Context</h1>
            <div className="context_text">
                Real life attacks confirm that accessing somebody else's account by answering a security question, using a secondary account, or
                calling a customer service center is often much easier and less time consuming than cracking the actual account's
                password. 
            </div>
        </div>
        <div className="context_image_container">
            <img src={new_context} className="context_img" alt="new context pic"/>
        </div>

    </div>
}

export default Context;