import React from "react";
import io from "socket.io-client"
import {useEffect} from "react";

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

        const newMsg = {text: content, floatValue: "float-right"};
        document.getElementById("outText").value = "";
        socket.emit("newMessage", props.currentUser);
    }

    const chat = props.currentUser;
    useEffect(() => {
        socket.on("receiveMessage", handleMessageReceived);

        return () => {
            socket.off("receiveMessage", handleMessageReceived);
        };
    }, [props.currentUser]);

    const handleMessageReceived = async (chatID) => {
        let autor = 'Bearer ' + props.token
        let x= chatID-props.currentUser;
        let p=x;
        console.log("x is" + x);
        console.log("CHATID ISSSSSSS: " + chatID)
        console.log("CHAT ISSSSS: " + chat);
        console.log("MESSAGE RECEIVED");
        console.log("before if ChatID " + chatID)
        console.log("before if  chat: " + chat);
        const responseGetContacts = await fetch('http://localhost:5000/api/Chats/', {
            method: 'GET',
            headers: {
                'Authorization': autor,
                'accept': 'text/plain',
            }
        })
        const contacts = await responseGetContacts.json();  //->
        props.setUserContacts(contacts);
        if (props.currentUser === chatID  ) {
            console.log("----PAST IF----")
            console.log("PAST IF CHATID ISSSSSSS: " + chatID)
            console.log("PAST IF CHAT ISSSSS: " + chat);
            let userAddress = 'http://localhost:5000/api/Chats/' + props.currentUser + '/Messages'

            const responseGet = await fetch(userAddress, {
                method: 'GET',
                headers: {
                    'Authorization': autor,
                    'accept': 'text/plain',
                }
            })
            const contactMessages = await responseGet.json();
            if(props.currentUser === chatID && p===0 && x===0){
                props.setCurrentContactMsgs(contactMessages);
            }

        }
    }

    return (
        <div className="sendLine">
            <input type="text" id="outText" className="textOut"></input>
            <button className="btn btn-success outbtn" onClick={handleClick}>Send</button>
        </div>
    );
}

export default ChatInteraction;