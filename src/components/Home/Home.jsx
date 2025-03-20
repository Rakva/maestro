import "./home.css"
import { useRef } from "react";
import text from "../../assets/lang/text";


function Home({setHomeRef, lang}){

    const my_Ref_home = useRef(null);
    setHomeRef(my_Ref_home);
    return <div className="home" ref={my_Ref_home}>
        <div className="home_container">
            <h1 className="home_text_main">{text.home.title[`${lang}`]}</h1>
            <h3 className="home_text_sec">{text.home.subtext[`${lang}`]}</h3>
        </div>
    </div>
}

export default Home;