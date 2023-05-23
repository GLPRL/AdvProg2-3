import profilePic3 from '../../../../../images/profilePic3.jpg'

function Contact(props) {
    async function handleContactClick() {
        props.setCurrentUser(props.id);
        const contactUrl = 'http://localhost:5000/api/Chats/' + props.id + '/Messages'
        let autor = 'Bearer ' + props.token

        const response = await fetch(contactUrl,{
                                method: 'GET',
                                headers: {
                                    'Authorization': autor,
                                    'accept': 'text/plain',
                                }
                            })
        const contactMessages = await response.json();
        props.setCurrentContactMsgs(contactMessages);


        const element = document.getElementById("msgScroll");
        element.scrollTop = element.scrollHeight;
        var contactName = document.getElementById("contactUser");
        contactName.innerHTML = props.name;
        var contactImage = document.getElementById("contactImage");
        contactImage.src = props.image;
        props.setCurrentContactImage(props.image)
    }
    const contact =
    <>
        <td><img src={`data:image/jpeg;base64, ${props.image}`} alt="" className="chat-profile-image rounded-circle"></img></td>
        <td className="chat-profile-name">{props.name}</td>
    </>
    return (
        <tr className="table-info" onClick={()=>handleContactClick(props.id)}>
        {contact}
        </tr>
    )
}
export default Contact;