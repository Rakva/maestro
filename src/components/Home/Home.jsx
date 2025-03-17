import "./home.css"
import { useRef } from "react";


function Home({setHomeRef}){

    const my_Ref_home = useRef(null);
    setHomeRef(my_Ref_home);
    return <div className="home" ref={my_Ref_home}>
        <div className="home_container">
            <h1 className="home_text_main">Is Your Account Ecosystem Secure?</h1>
            <h3 className="home_text_sec">The security of an online account depends not only on that account's protection
            strength, but also on the dependencies between the different accounts that a user has.</h3>
        </div>
    </div>
}

export default Home;