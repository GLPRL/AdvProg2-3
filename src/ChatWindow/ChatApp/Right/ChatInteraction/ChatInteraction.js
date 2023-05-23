import userData from "../../../../usersData";
import React from "react";
function ChatInteraction(props) {
    async function handleClick() {
        const content = document.getElementById("outText").value;
        if (content === "") {
            return;
        }


        let autor = 'Bearer ' + props.token
        console.log("curr user id is " + props.currentUser)
        let userAdress = 'http://localhost:5000/api/Chats/' + props.currentUser + '/Messages'
        const response = await fetch(userAdress, {
                            method: 'POST',
                            headers: {
                                'accept': 'text/plain',
                                'Authorization': autor,
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                msg: content
                                }),
                            })
                            props.msgChangeHandler();
        if (response.status == 200) {
            console.log("response msg status is " + response.status);
        }
            

        const newMsg = {text: content, floatValue: "float-right"};
        document.getElementById("outText").value = "";
    }
    return(
        <div className="sendLine">
            <input type="text" id="outText" className="textOut"></input>
            <button className="btn btn-success outbtn" onClick={handleClick}>Send</button>
        </div>
    );
}
export default ChatInteraction;