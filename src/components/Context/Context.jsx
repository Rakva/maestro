import "./context.css";
import context_image from "../../assets/context/context_image.png"
import context_image_recovery_2 from "../../assets/context/context_image_recovery_2.png"
import context_image_recovery_1 from "../../assets/context/context_image_recovery_1.png"
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
            <img src={context_image_recovery_2} className="context_img" alt="context_img_Recovery_2"/>
            <img src={context_image_recovery_1} className="context_img" alt="context_img_Recovery_1"/>
        </div>

    </div>
}

export default Context;