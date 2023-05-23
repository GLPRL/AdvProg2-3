import ContactsList from "./ContactsList/ContactsList";
import { useState } from "react";
function ContactsMenu(props) {
    const [isFirstContactLoad,setIsFirstContactLoad] = useState(1);
    return(
        <div className="contactScroll">
            <table className="table table-hover test">
                <ContactsList isFirstContactLoad={isFirstContactLoad} setIsFirstContactLoad={setIsFirstContactLoad}  setUserContacts={props.setUserContacts} token={props.token} setCurrentContactMsgs={props.setCurrentContactMsgs} setCurrentUser={props.setCurrentUser} setCurrentChatId={props.setCurrentChatId} userContacts={props.userContacts}/>
            </table>
        </div>
    );
}
export default ContactsMenu;