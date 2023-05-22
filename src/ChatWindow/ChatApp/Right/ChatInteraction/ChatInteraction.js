import userData from "../../../../usersData";
import React from "react";
function ChatInteraction(props) {
    function handleClick() {
        let messageArray = [];
        const content = document.getElementById("outText").value;
        if (content === "") {
            return;
        }
        const now = new Date();
        const date = now.toLocaleString();

        const msgsConvo = userData.find(item => {
            if (item.id === props.currentUser) {
                messageArray = item.messages;
            }});

        const currentUserIndex = userData.findIndex(item => item.id === props.currentUser)
        if (currentUserIndex < 0)
        {
            alert("Invalid user!");
            document.getElementById("outText").value = "";
            return;
        }
        userData[currentUserIndex].lastMsgTime = date;
        const newMsg = {text: content, floatValue: "float-right"};
        messageArray.push(newMsg);
        document.getElementById("outText").value = "";
        props.msgChangeHandler();
    }
    return(
        <div className="sendLine">
            <input type="text" id="outText" className="textOut"></input>
            <button className="btn btn-success outbtn" onClick={handleClick}>Send</button>
        </div>
    );
}
export default ChatInteraction;