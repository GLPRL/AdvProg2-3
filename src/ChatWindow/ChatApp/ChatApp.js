import Left from "./Left/Left";
import Right from "./Right/Right";
import { useState } from "react";
import { useEffect } from "react";
function ChatApp() {
    const [currentUser, setCurrentUser] = useState(1);
    const [firstPrint, setfirstPrint] = useState(true);
    const [msgSent,setMsgSent] = useState(false);
    function msgChangeHandler() {
        setMsgSent(!msgSent);
    }
    useEffect(()=>{
    },[currentUser]);
    return (
        <div className="container content row no-gutters text">
            <Left setCurrentUser={setCurrentUser}/>
            <Right currentUser={currentUser} firstPrint={firstPrint} setfirstPrint={setfirstPrint} msgChangeHandler={msgChangeHandler}/>
        </div>
    );
}
export default ChatApp;