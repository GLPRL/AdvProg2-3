import React from 'react';
import userData from '../../usersData'

function ModalFooter(props) {
    function handleClick() {
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
    }
    return (
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button add" id="addContact" className="btn btn-primary" data-dismiss="modal" onClick={handleClick}>Add</button>
        </div>
    );
}
export default ModalFooter;