import profilePic3 from '../../../../../images/profilePic3.jpg'

function Contact(props) {
    function handleContactClick() {
        props.setCurrentUser(props.id);
        const element = document.getElementById("msgScroll");
        element.scrollTop = element.scrollHeight;
        var contactName = document.getElementById("contactUser");
        contactName.innerHTML = props.name;
        var contactImage = document.getElementById("contactImage");
        contactImage.src = props.image;
    }
    const contact =
    <>
        <td><img src={ props.image } alt="" className="chat-profile-image rounded-circle"></img></td>
        <td className="chat-profile-name">{props.name}</td>
        <td className="chat-date"><small>{props.lastMsgTime}</small></td>
    </>
    return (
        <tr className="table-info" onClick={()=>handleContactClick(props.id)}>
        {contact}
        </tr>
    )
}
export default Contact;