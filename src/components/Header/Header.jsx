import maestro from "../../assets/maestro_logo.png"
import "./header.css";
import menuButton from "../../assets/menu.svg";
import closeButton from "../../assets/close.svg";
import { useState } from "react";

function Header({homeRef, contextRef, objectiveRef, theoryRef, featuresRef, contactsRef, sideMenu ,setSideMenu}){

    const sections = [
        {
            name: "Home",
            ref: homeRef
        },
        {
            name: "Context",
            ref: contextRef
        }, 
        {
            name: "Objective",
            ref: objectiveRef
        
        }, 
        {
            name: "Theory",
            ref: theoryRef
        }, 
        {
            name: "Features",
            ref: featuresRef
        
        }, 
        {
            name:"Contacts",
            ref: contactsRef
        }
    ];
       
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
        </div> 
        <div className="menu_button_container" onClick={()=>setSideMenu(!sideMenu)}>
            <img src={sideMenu ? closeButton : menuButton} className="menu_button" alt="menu button 1"/>
        </div>
    </div>
}

export default Header;