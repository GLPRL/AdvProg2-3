import React, {useEffect} from "react";
import io from "socket.io-client"

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
            document.getElementById("outText").value = "";
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

    socket.on("receiveMessage", async (chatID) => {
        console.log("CHATID ISSSSSSS: " + chatID)
        console.log("CHAT ISSSSS: " + chat);
        console.log("MESSAGE RECEIVED");
        if (props.currentUser == chatID) {
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
            //if all 4 are active: if new chat, and msg is sent, the chat won't appear at dest.
            //if user3 is in chat with user 2, and user1 is sending msg to user3, then it jumps to the user1+user3 chat
            /*1*/const contactMessages = await responseGet.json();    //->     //if removed: cant run the next line
            /*2*/props.setCurrentContactMsgs(contactMessages);        //->     //if removed: updates only time,
                                                                            //and won't receive the new message or make the new chat at destination

            //if both of them were removed, then: same as first line of the two
            const responseGetContacts = await fetch('http://localhost:5000/api/Chats/', {
                method: 'GET',
                headers: {
                    'Authorization': autor,
                    'accept': 'text/plain',
                }
            })
            /*1*/const contacts = await responseGetContacts.json();  //->    //if removed: cant run next line.
            /*2*///props.setUserContacts(contacts);                  //->      //if removed: wont update contactslist, messages are displayed.
                                                                //time is updated only at senders' side.
                                //if both removed: same as 2nd line.

            //IF ALL 4 ARE REMOVED: all effects combined
        }
    })

    return (
        <div className="sendLine">
            <input type="text" id="outText" className="textOut"></input>
            <button className="btn btn-success outbtn" onClick={handleClick}>Send</button>
        </div>
    );
}

export default ChatInteraction;