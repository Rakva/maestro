import { useRef } from "react";
import "./features.css"

function Features({setFeaturesRef}){
    const my_features = useRef(null);
    setFeaturesRef(my_features);
    const firstList = ["Automatic scan","Displaying warnings","Warning Definition",];
    const secondList = ["Attacker profile in manual mode","Attacker profile in automatic mode","Launching analysis"];
    const thirdList = ["Creating a vertex","Menu for vertex","Moving vertices"];
    return <div className="features" ref={my_features}>
        <h1 className="features_title">Features</h1>
        <div className="features_container">
            <div className="features_container_text">
                <h3 className="features_list_title">Security  Analysis</h3> {/* of  a  User's  Account  Ecosystem */}
                <ul className="features_list">
                    {firstList.map((element, index)=>{
                        return <li className="features_list_item">{element}</li>
                    })}
                </ul>
            </div>
            <div className="features_container_text">
            <h3 className="features_list_title">Modeling attacker</h3> {/* profiles for security analysis of account ecosystem */}
                <ul className="features_list">
                    {secondList.map((element, index)=>{
                        return <li className="features_list_item">{element}</li>
                    })}
                </ul>
            </div>
            <div className="features_container_text">
            <h3 className="features_list_title">Dynamic access graph</h3> {/*representation of an  */}
                <ul className="features_list">
                    {thirdList.map((element, index)=>{
                        return <li className="features_list_item">{element}</li>
                    })}
                </ul>
            </div>
        </div>
    </div>
}

export default Features;