import { useState } from "react";
import userData from "./../../../../usersData";
import ChatMessage from "./ChatMessage"
function ChatMessages(props) {
let messageArray = [];
let msgsConvo;
    msgsConvo = userData.find(item => {
    if (item.id === props.currentUser) {
        messageArray = item.messages;
    }});
    return(
        <div className="msgScroll" id="msgScroll">
            <table className="table table-borderless ">
            <tbody>
            {messageArray.map((item) =>
                <ChatMessage message={item.text}
                          floatValue={item.floatValue} />
            )}
            </tbody>
            </table>
        </div>
    );
}
export default ChatMessages;