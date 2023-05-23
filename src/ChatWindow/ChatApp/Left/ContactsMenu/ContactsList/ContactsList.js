import usersData from '../../../../../usersData'
import '../../../../../stylesheets/chatWindow.css'
import monkeyProfilePic from '../../../../../images/monkeyprofilepic.jpg'
import Contact from './Contact';
function ContactsList(props) {

        async function initContactList() {
            let autor = 'Bearer ' + props.token
            const response  = await fetch('http://localhost:5000/api/Chats',{
                method: 'GET',
                headers: {
                    'Authorization': autor,
                    'accept': 'text/plain',
                }
            })
                const contacts = await response.json();
                props.setUserContacts(contacts);
        }

        if (props.isFirstContactLoad) {
            initContactList();
            props.setIsFirstContactLoad(0);
        }
        const contacts = props.userContacts
        const allContacts = contacts.map((contact, key) =>
                <Contact contactIdAndTime={props.contactIdAndTime} setCurrentContactDisplayName={props.setCurrentContactDisplayName} setCurrentContactImage={props.setCurrentContactImage} token={props.token} name={contact.user.displayName} id={contact.id} key={key} setCurrentContactMsgs={props.setCurrentContactMsgs} setCurrentUser={props.setCurrentUser} lastMsgTime={contact.lastMsgTime} image={contact.user.profilePic}></Contact>
            );
        return(
            <tbody id="contactTable">{allContacts}</tbody>
        )
}
export default ContactsList;