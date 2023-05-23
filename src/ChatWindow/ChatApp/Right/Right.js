import ContactTab from "./ContactTab/ContactTab";
import ChatMessages from "./ChatMessages/ChatMessages";
import ChatInteraction from "./ChatInteraction/ChatInteraction";
import { useState } from "react";
function Right(props) {
    const [msgSent,setMsgSent] = useState(false);

    function msgChangeHandler() {
        setMsgSent(!msgSent);
    }
    return(
        <div className="contactBox border-right col-8">
            <ContactTab currentContactImage={props.currentContactImage}/>
            <ChatMessages user={props.user} currentUser={props.currentUser} token={props.token} firstPrint={props.firstPrint} setfirstPrint={props.setfirstPrint} currentContactMsgs={props.currentContactMsgs}/>
            <ChatInteraction currentUser={props.currentUser} token={props.token} firstPrint={props.firstPrint} setfirstPrint={props.setfirstPrint} msgChangeHandler={msgChangeHandler} />
        </div>
    );
}
export default Right;