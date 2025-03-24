import "./maestro+.css"
import { useState, useRef } from "react";
import close_black from "../../assets/close_black.png";
import Features_Func from "../../assets/features/features";
import maestro from "../../assets/maestro_logo.png"
import text from "../../assets/lang/text";

function MaestroPlus({setMaestroReference, lang}){
    
    const features = Features_Func(lang);

    const maestro_reference = useRef(null);
    setMaestroReference(maestro_reference);

    const selectedPicRef = useRef(null);

    const [picSrc, setPicSrc] = useState(maestro);

    function clicking(num){
        setPicSrc(num);
        selectedPicRef.current?.scrollIntoView({behavior: 'smooth'})
    }
    return <div className="maestro_plus" ref={maestro_reference}>
        <h1 className="maestro_plus_title">{text.maestroPlus.title[`${lang}`]}</h1>
        <span className="maestro_plus_subtext">
        {text.maestroPlus.subtext.part1[`${lang}`]}{' '}
        <b>{text.maestroPlus.subtext.part2[`${lang}`]}</b> {' '}
        {text.maestroPlus.subtext.part3[`${lang}`]} {' '}
        <a href="https://dl.acm.org/doi/10.1145/3319535.3354193" className="theory_intro_link">
            {text.maestroPlus.subtext.part4[`${lang}`]}
        </a> {' '}
        {text.maestroPlus.subtext.part5[`${lang}`]} {' '}
        {text.maestroPlus.subtext.part6[`${lang}`]}

        
        </span>
        <div className="maestro_plus_feat">
            {
                features.map((item, index)=>{
                    return <div className="maestro_plus_feat_item" key={index}>
                        <div className="maestro_plus_feat_item_title">{item.title}</div>
                        <div className="maestro_plus_feat_item_list_container">
                            <ul className="maestro_plus_feat_item_list">
                            {
                                item.list.map((list_item, index)=>{
                                    return <li 
                                    key={index} 
                                    onClick={()=>clicking(list_item.src)}>
                                        <span className={list_item.src === "" ? "maestro_plus_feat_item_list_item" : "maestro_plus_feat_item_list_item_link"} >
                                            {list_item.text}
                                        </span>
                                    </li>
                                })
                            }
                            </ul>
                        </div>
                    </div>
                })
            }
        </div> 
        <div className="maestro_plus_feat_example" ref={selectedPicRef}>
            <img 
                className={picSrc === maestro ? "none" : "maestro_plus_feat_close"} 
                onClick={()=>{setPicSrc(maestro)}} 
                src={close_black} 
                alt="closing button icon"/>
            <img className="maestro_plus_feat_example_pic" src={picSrc} alt="selected"/>
        </div>
    </div>
}

export default MaestroPlus;