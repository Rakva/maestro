import { useRef } from "react"
import "./contacts.css"
import team from "../../assets/contacts/team";
import insa  from "../../assets/contacts/contacts";

function Contacts({setContactsRef}){
    const my_contacts = useRef(null);
    setContactsRef(my_contacts);

    return <div className="contacts" ref={my_contacts}>
        <h1 className="contacts_title">Contacts</h1>
        <div className="contacts_container">
            {team.map((element,index)=>{
                return <div className="team_memeber" key={index}>
                        <a className="team_member_linked_in" href={element.linkedIn}>
                            <h4 className="team_member_name">{element.name}</h4>
                        </a>
                        <h5 className="team_member_role">{element.role}</h5>
                    </div>
            })}
        </div>
        <div className="insa_container">
            <div className="insa_name">{insa.name}</div>
            <div className="insa_text">{insa.text}</div>
            <div className="insa_row">
                <img src={insa.logo} alt="insa_logo" className="insa_logo"/>
                <div className="insa_contacts">
                    <div className="insa_contacts_address"><b>Address:</b> {insa.contacts.address}</div>
                    <div className="insa_contacts_post"><b>Post:</b> {insa.contacts.post}</div>
                    <div className="insa_contacts_city"><b>City:</b> {insa.contacts.city}</div>
                    <div className="insa_contacts_country"><b>Country:</b> {insa.contacts.country}</div>
                    <div className="insa_contacts_number"><b>Number:</b> {insa.contacts.number}</div>
                </div>
            </div>
        </div>
    </div>
}
export default Contacts;