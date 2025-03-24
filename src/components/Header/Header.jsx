import maestro from "../../assets/maestro_logo.png"
import { useState } from "react";
import "./header.css";
import menuButton from "../../assets/menu.svg";
import closeButton from "../../assets/close.svg";
import text from "../../assets/lang/text";
import EN from "../../assets/lang/UK.png"
import FR from "../../assets/lang/France.png"
import GEO from "../../assets/lang/Georgia.png"
import arrowDown from "../../assets/lang/arrow_down.png";
import arrowUp from "../../assets/lang/arrow_up.png";

function Header({homeRef, contextRef, dictionaryRef, maestroReference, contactsRef, sideMenu ,setSideMenu, lang, setLang}){

    const [menu, setMenu] = useState(false);
    const languages = {
        EN: EN,
        FR: FR,
        GEO: GEO
    }
    const languagesNames = ["EN", "FR", "GEO"];

    const sections = [
        {
            name: text.header.home[`${lang}`],
            ref: homeRef
        },
        {
            name: text.header.context[`${lang}`],
            ref: contextRef
        }, 
        {
            name: text.header.dictionary[`${lang}`],
            ref: dictionaryRef
        
        }, 
        {
            name: text.header.maestroPlus[`${lang}`],
            ref: maestroReference
        },
        {
            name: text.header.contacts[`${lang}`],
            ref: contactsRef
        }
    ];
       
    function setLanguage(lang){
        if (lang === "EN") setLang("FR");
            else if (lang === "FR") setLang("GEO");
                else if (lang === "GEO") setLang("EN");
    }

    return <div className="header">
        <div className="logo_container">
            <img src={maestro} className="logo_header" alt="maestro"/>
        </div>
        <div className="menu_normal_container">
            <li className="menu_normal_list">
                {sections.map((element, index) => {
                    return <ul className="menu_normal_list_item" 
                    onClick={() => element.ref?.current?.scrollIntoView({behavior: 'smooth'})}
                    key={index}>
                        {element.name}
                    </ul>
                })}
            </li>
            <div className="lang_container">
                <img className={menu ? "none" : "menu_languages"} src={languages[`${lang}`]}/>
                <img className="drop_down" src={menu ? arrowUp : arrowDown} alt="drop-down arrow" onClick={()=>setMenu(!menu)}/>
                {menu && <div className="lang_list">
                    {languagesNames.map((element, index)=>{
                        return <img 
                            onClick={()=>setLanguage(lang)}
                            className="lang_list_flag" 
                            src={languages[`${element}`]} 
                            key={index} 
                            alt={`flag #${index+1}`}/>
                    })}
                </div>}
            </div>
        </div> 
        <div className="menu_button_container" onClick={()=>setSideMenu(!sideMenu)}>
            <img src={sideMenu ? closeButton : menuButton} className="menu_button" alt="menu button 1"/>
        </div>
    </div>
}

export default Header;