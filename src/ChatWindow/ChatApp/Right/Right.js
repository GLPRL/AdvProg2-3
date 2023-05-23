import ContactTab from "./ContactTab/ContactTab";
import ChatMessages from "./ChatMessages/ChatMessages";
import ChatInteraction from "./ChatInteraction/ChatInteraction";
import { useState } from "react";
function Right(props) {

    return(
        <div className="contactBox border-right col-8">
            <ContactTab currentContactImage={props.currentContactImage}/>
            <ChatMessages user={props.user} currentUser={props.currentUser} token={props.token} firstPrint={props.firstPrint} setfirstPrint={props.setfirstPrint} currentContactMsgs={props.currentContactMsgs}/>
            <ChatInteraction currentContactMsgs={props.currentContactMsgs} setCurrentContactMsgs={props.setCurrentContactMsgs} currentUser={props.currentUser} token={props.token} firstPrint={props.firstPrint} setfirstPrint={props.setfirstPrint} />
        </div>
    );
}
export default Right;