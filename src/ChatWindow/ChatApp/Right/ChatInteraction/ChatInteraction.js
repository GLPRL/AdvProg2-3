import React from "react";
import io from "socket.io-client"
import { useEffect} from "react";
export const socket = io.connect("http://localhost:5000")

function ChatInteraction(props) {
    async function handleClick() {
        console.log("CHATID IS: " + props.currentUser);
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
        socket.emit("newMessage", props.currentUser);
    }
    const chat = props.currentUser;
    console.log("CHAT: " + chat)
    useEffect(() => {
        socket.on("receiveMessage", async (chatID) => {
            console.log("CHATID ISSSSSSS: " + chatID)
            console.log("CHAT ISSSSS: " + chat);
            console.log("MESSAGE RECEIVED");
            if (chat == chatID) {
                console.log("----PAST IF----")
                let userAdress = 'http://localhost:5000/api/Chats/' + props.currentUser + '/Messages'
                let autor = 'Bearer ' + props.token
                const responseGet = await fetch(userAdress, {
                    method: 'GET',
                    headers: {
                        'Authorization': autor,
                        'accept': 'text/plain',
                    }
                })
                const contactMessages = await responseGet.json();
                props.setCurrentContactMsgs(contactMessages);
                const responseGetContacts = await fetch('http://localhost:5000/api/Chats/', {
                    method: 'GET',
                    headers: {
                        'Authorization': autor,
                        'accept': 'text/plain',
                    }
                })
                const contacts = await responseGetContacts.json();
                props.setUserContacts(contacts);
            }
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