import profilePic3 from '../../../../../images/profilePic3.jpg'

function Contact(props) {
    let date;
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
        let numOfMessages = 0;
        for (const msg in contactMessages) {
            numOfMessages++;
        }
        console.log("numOfContacts is " + numOfMessages)
        date = contactMessages[numOfMessages-1].created;
        props.setCurrentContactMsgs(contactMessages);
        props.setCurrentContactImage(props.image);
        props.setCurrentContactDisplayName(props.name);
    }
    const contact =
    <>
        <td><img src={`data:image/jpeg;base64, ${props.image}`} alt="" className="chat-profile-image rounded-circle"></img></td>
        <td className="chat-profile-name">{props.name}</td>
        <td className="chat-date"><small>{date}</small></td>
    </>
    return (
        <tr className="table-info" onClick={()=>handleContactClick(props.id)}>
        {contact}
        </tr>
    )
}
export default Contact;