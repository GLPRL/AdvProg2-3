import Left from "./Left/Left";
import Right from "./Right/Right";
import { useState } from "react";
import { useEffect } from "react";
function ChatApp(props) {
    const [currentUser, setCurrentUser] = useState(1);
    const [firstPrint, setfirstPrint] = useState(true);
    const [currentChatId, setCurrentChatId] = useState(null);
    const [currentContactMsgs, setCurrentContactMsgs] = useState([])

    useEffect(()=>{
    },[currentUser]);

    return (
        <div className="container content row no-gutters text">
            <Left setCurrentContactImage={props.setCurrentContactImage} setCurrentUser={setCurrentUser} user={props.user} userContacts={props.userContacts} token={props.token} setCurrentChatId={setCurrentChatId} setCurrentContactMsgs={setCurrentContactMsgs} setUserContacts={props.setUserContacts}/>
            <Right currentContactMsgs={currentContactMsgs} currentContactImage={props.currentContactImage} currentUser={currentUser} user={props.user} firstPrint={firstPrint} userContacts={props.userContacts} token={props.token} setfirstPrint={setfirstPrint} setCurrentContactMsgs={setCurrentContactMsgs} />
        </div>
    );
}
export default ChatApp;