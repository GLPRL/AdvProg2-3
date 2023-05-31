import React from "react";
import io from "socket.io-client"
import { useEffect} from "react";
export const socket = io.connect("http://localhost:5000")

function ChatInteraction(props) {
    async function handleClick() {
        const content = document.getElementById("outText").value;
        if (content === "") {
            return;
        }
        const contactUser = document.getElementById("contactUser").value;
        if (contactUser === "") {
            return;
        }
        let autor = 'Bearer ' + props.token
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

        const responseGet = await fetch(userAdress, {
            method: 'GET',
            headers: {
                'Authorization': autor,
                'accept': 'text/plain',
            }
        })
        const contactMessages = await responseGet.json();
        props.setCurrentContactMsgs(contactMessages);
        props.setContactIdAndTime([props.currentUser, contactMessages[0].created])

        const responseGetContacts = await fetch('http://localhost:5000/api/Chats/', {
            method: 'GET',
            headers: {
                'Authorization': autor,
                'accept': 'text/plain',
            }
        })
        const contacts = await responseGetContacts.json();
        props.setUserContacts(contacts);
        const newMsg = {text: content, floatValue: "float-right"};
        document.getElementById("outText").value = "";
        socket.emit("newMessage", )


    }

    useEffect(() => {
        socket.on("receiveMessage", () => {
            alert("MESSAGE RECEIVED");      //Gonna need to invoke the update chat function
        })
    }, [socket]);
    return (
        <div className="sendLine">
            <input type="text" id="outText" className="textOut"></input>
            <button className="btn btn-success outbtn" onClick={handleClick}>Send</button>
        </div>
    );
}

export default ChatInteraction;