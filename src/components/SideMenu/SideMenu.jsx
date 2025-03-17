import "./sideMenu.css"

function SideMenu({homeRef, contextRef, objectiveRef, theoryRef, featuresRef, maestroRef, contactsRef, sideMenu, setSideMenu}){

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
            name: "Maestro+",
            ref: maestroRef
        }, 
        {
            name:"Contacts",
            ref: contactsRef
        }
    ]; 
    function gotosection(ref){
        setSideMenu(false);
        ref.current?.scrollIntoView({behavior: 'smooth'})
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
                </div>
        </div>
    </div>
}
export default SideMenu;