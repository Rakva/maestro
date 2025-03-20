import "./maestro+.css"
import { useState, useRef } from "react";
import close_black from "../../assets/close_black.png";
import Features_Func from "../../assets/features/features";
import text from "../../assets/lang/text";

function MaestroPlus({setMaestroReference, lang}){
    
    const features = Features_Func(lang);

    const maestro_reference = useRef(null);
    setMaestroReference(maestro_reference);

    const selectedPicRef = useRef(null);

    const [picOn, setPicOn] = useState(false);
    const [picSrc, setPicSrc] = useState("");

    function clicking(num){
        setPicOn(true);
        setPicSrc(num);
        selectedPicRef.current?.scrollIntoView({behavior: 'smooth'})
    }
    return <div className="maestro_plus" style={{height: picOn ? 1100 : 600}} ref={maestro_reference}>
        <h1 className="maestro_plus_title">{text.maestroPlus.title[`${lang}`]}</h1>
        <span>
        {text.maestroPlus.subtext.part1[`${lang}`]}{' '}
        <a href="https://dl.acm.org/doi/10.1145/3319535.3354193" className="theory_intro_link">{text.maestroPlus.subtext.part2[`${lang}`]}</a>, 
        {text.maestroPlus.subtext.part3[`${lang}`]} {' '}
        <b>{text.maestroPlus.subtext.part4[`${lang}`]}</b> {' '}
        {text.maestroPlus.subtext.part5[`${lang}`]} {' '}<b>{text.maestroPlus.subtext.part6[`${lang}`]}</b>{' '}
        {text.maestroPlus.subtext.part7[`${lang}`]}:
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
        {
        picOn && <div className="maestro_plus_feat_example" ref={selectedPicRef}>
            <img className="maestro_plus_feat_close" onClick={()=>{setPicOn(false)}} src={close_black} alt="closing button icon"/> {/*position absolute, on top right */}
            <img className="maestro_plus_feat_example_pic" src={picSrc} alt="selected"/>
        </div>
        }

    </div>
}

export default MaestroPlus;