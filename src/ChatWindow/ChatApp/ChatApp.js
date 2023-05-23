import Left from "./Left/Left";
import Right from "./Right/Right";
import { useState } from "react";
import { useEffect } from "react";
function ChatApp(props) {
    const [currentUser, setCurrentUser] = useState(1);
    const [firstPrint, setfirstPrint] = useState(true);
    const [msgSent,setMsgSent] = useState(false);
    const [currentChatId, setCurrentChatId] = useState(null);
    function msgChangeHandler() {
        setMsgSent(!msgSent);
    }
    useEffect(()=>{
    },[currentUser]);
    return (
        <div className="container content row no-gutters text">
            <Left setCurrentUser={setCurrentUser} user={props.user} userContacts={props.userContacts} token={props.token} setCurrentChatId={setCurrentChatId}/>
            <Right currentUser={currentUser} firstPrint={firstPrint} userContacts={props.userContacts} token={props.token} setfirstPrint={setfirstPrint} msgChangeHandler={msgChangeHandler}/>
        </div>
    );
}
export default ChatApp;