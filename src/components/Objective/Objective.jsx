import { useRef } from "react";
import "./objective.css";
import awareness from "../../assets/awareness.png";
import lock from "../../assets/lock.png";

function Objective({setObjectiveRef}){
    const my_objective = useRef(null);
    setObjectiveRef(my_objective);
    const list = [
        "Identifing the attacks that the user's account ecosystem is potentially subject to.",
        "Analyzing the user's account ecosystem under two risk profiles: work colleague and family member",
        "Intuitive interface for creating access graphs"
    ];
    return <div className="objective" ref={my_objective}>
        <img src={lock} alt="pic 1" className="objective_img"/>
        <div className="objective_container">
            <h1 className="objective_text_h1">Objective</h1> 
            <div className="objective_text">Objective will be to exploit the Maestro account manager to raise the user's awareness of the
            security of their account ecosystem.
            <ul className="objective_list">
                {list.map((element,index)=>{
                    return <li className="objective_list_item" key={index}>
                        {element}
                    </li>
                })}
            </ul></div>
        </div>
        <img src={awareness} alt="pic 2" className="objective_img"/>
    </div>
}

export default Objective;