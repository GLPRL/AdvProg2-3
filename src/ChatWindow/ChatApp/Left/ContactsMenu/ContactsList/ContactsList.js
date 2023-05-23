import usersData from '../../../../../usersData'
import '../../../../../stylesheets/chatWindow.css'
import monkeyProfilePic from '../../../../../images/monkeyprofilepic.jpg'
import Contact from './Contact';
function ContactsList(props) {
        const contacts = props.userContacts
        const allContacts = contacts.map((contact, key) =>
                <Contact name={contact.user.displayName} id={contact.id} key={key} setCurrentUser={props.setCurrentUser} lastMsgTime={contact.lastMsgTime} image={contact.user.profilePic}></Contact>
            );
        return(
            <tbody id="contactTable">{allContacts}</tbody>
        )
}
export default ContactsList;