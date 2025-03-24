import "./sideMenu.css"
import text from "../../assets/lang/text";
import EN from "../../assets/lang/UK.png"
import FR from "../../assets/lang/France.png"
import GEO from "../../assets/lang/Georgia.png"

function SideMenu({homeRef, contextRef, dictionaryRef, maestroReference, contactsRef, sideMenu, setSideMenu, lang, setLang}){

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
    function gotosection(ref){
        setSideMenu(false);
        ref.current?.scrollIntoView({behavior: 'smooth'})
    }
    function setLanguage(lang){
        if (lang === "EN") setLang("EN");
            else if (lang === "FR") setLang("FR");
                else if (lang === "GEO") setLang("GEO");
        setSideMenu(false)
    }
    return <div className={sideMenu ? "side_menu" : "side_menu none"}>
        <div className="pop_up_container">
                <div className="pop_up">
                    <li className="pop_up_menu_normal_list">
                        {sections.map((element, index) => {
                            return <ul className="pop_up_menu_normal_list_item" 
                            onClick={() => gotosection(element.ref)}
                            key={index}>
                                {element.name}
                            </ul>
                        })}
                    </li>   
                    <div className="lang_row">
                        {
                            languagesNames.map((element, index)=>{
                                return <img 
                                    src={languages[`${element}`]}
                                    key={index} 
                                    className="menu_languages" 
                                    onClick={()=>setLanguage(element)}
                                />
                            })
                        }
                    </div>
                </div>
        </div>
    </div>
}
export default SideMenu;