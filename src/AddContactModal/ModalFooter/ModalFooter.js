import React from 'react';
import userData from '../../usersData'

function ModalFooter(props) {
    async function handleClick() {
        const input = document.getElementById("modalInput");
        const inputValue = input.value.trim();
        if (!inputValue) {
            alert("Enter Valid User Information");
            document.getElementById("modalInput").value = "";
            return;
        }
        document.getElementById("modalInput").value = "";
        const newContact = {id:props.idCount, name:inputValue,lastMsgTime:'', messages:[]};
        props.handleIdCount();
        const len = userData.push(newContact);
        let autor = 'Bearer ' + props.token
        let postResult = fetch('http://localhost:5000/api/Chats', {
                    method: 'POST',
                    headers: {
                        'accept': '*/*',
                        'Authorization': autor,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: inputValue
                    }),
                })

                .then(async postResult => {
                    console.log("postResult is " + postResult.status);
                    if (postResult.status == 200) {
                        const response  = await fetch('http://localhost:5000/api/Chats',{
                        method: 'GET',
                        headers: {
                            'Authorization': autor,
                            'accept': 'text/plain',
                        }
                    })
                        const contacts = await response.json();
                    }
                    
                })
    }
    return (
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button add" id="addContact" className="btn btn-primary" data-dismiss="modal" onClick={handleClick}>Add</button>
        </div>
    );
}
export default ModalFooter;