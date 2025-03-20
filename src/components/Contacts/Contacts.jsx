import { useRef } from "react"
import "./contacts.css";
import insa_logo from "../../assets/contacts/Insa_rennes_logo.svg";
import text from "../../assets/lang/text";

function Contacts({setContactsRef, lang}){
    const my_contacts = useRef(null);
    setContactsRef(my_contacts);

    return <div className="contacts" ref={my_contacts}>
        <h1 className="contacts_title">{text.contacts.title[`${lang}`]}</h1>
        <div className="supervisors_intro">{text.contacts.supervisor_text[`${lang}`]}</div>
        <div className="supervisors">
            {text.contacts.supervisors.map((supervisor, index)=>{
                return <h4 className="team_supervisor" key={index}>{supervisor}</h4>   
            })}    
        </div>
        <div className="contacts_container">
            {text.contacts.team.map((element,index)=>{
                return <div className="team_memeber" key={index}>
                        <a className="team_member_linked_in" href={element.linkedIn}>
                            <h4 className="team_member_name">{element.name}</h4>
                        </a>
                        <h5 className="team_member_role">{element.role[`${lang}`]}</h5>
                    </div>
            })}
        </div>
        <img src={insa_logo} alt="insa_logo" className="insa_logo"/>
    </div>
}
export default Contacts;