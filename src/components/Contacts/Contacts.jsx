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
        <div className="supervisors">
            <div className="contacts_container">
                {text.contacts.supervisors.map((supervisor, index)=>{
                    return <div className="team_memeber" key={index}>
                        <a href={supervisor.link} className="team_member_linked_in ">
                            <h4>
                            {supervisor.level + " "+ supervisor.name}
                            </h4>
                        </a>
                        <h5 className="team_member_role">{supervisor.role[`${lang}`]}</h5>
                    </div>   
                })} 
            </div>    
        </div>
        <div className="insa_container">
            <div className="insa_name">{text.contacts.insa.name}</div>
            <div className="insa_text">{text.contacts.insa.text}</div>
            <div className="insa_row">
                <img src={insa_logo} alt="insa_logo" className="insa_logo"/>
                <div className="insa_contacts">
                    <div className="insa_contacts_address"><b>{text.contacts.address[`${lang}`]}:</b> {text.contacts.insa.contacts.address}</div>
                    <div className="insa_contacts_city"><b>{text.contacts.city[`${lang}`]}:</b> {text.contacts.insa.contacts.city}</div>
                    <div className="insa_contacts_country"><b>{text.contacts.country[`${lang}`]}:</b> {text.contacts.insa.contacts.country}</div>
                    <div className="insa_contacts_number"><b>{text.contacts.number[`${lang}`]}:</b> {text.contacts.insa.contacts.number}</div>
                </div>
            </div>
        </div>
    </div>
}
export default Contacts;