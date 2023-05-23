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

            const responseGet = await fetch(userAdress,{
                method: 'GET',
                headers: {
                    'Authorization': autor,
                    'accept': 'text/plain',
                }
            })
                const contactMessages = await responseGet.json();
                props.setCurrentContactMsgs(contactMessages);
                console.log(contactMessages)
                console.log("---------------")
                console.log(props.currentContactMsgs)
                
            

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