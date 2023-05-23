import { useState } from "react";
import userData from "./../../../../usersData";
import ChatMessage from "./ChatMessage"
function ChatMessages(props) {

let messageArray = props.currentContactMsgs;
const reverseMessageArray = messageArray.slice(0).reverse();

    return(
        <div className="msgScroll" id="msgScroll">
            <table className="table table-borderless ">
            <tbody>
            {    
                reverseMessageArray.map((item) =>
                <ChatMessage message={item.content}
                          floatValue="float-right" />
            )}
            </tbody>
            </table>
        </div>
    );
}
export default ChatMessages;