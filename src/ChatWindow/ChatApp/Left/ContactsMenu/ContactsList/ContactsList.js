import usersData from '../../../../../usersData'
import '../../../../../stylesheets/chatWindow.css'
import monkeyProfilePic from '../../../../../images/monkeyprofilepic.jpg'
import Contact from './Contact';
function ContactsList(props) {
        const allContacts = usersData.map((contact, key) =>
                <Contact name={contact.name} id={contact.id} key={key} setCurrentUser={props.setCurrentUser} lastMsgTime={contact.lastMsgTime} image={monkeyProfilePic}></Contact>
            );
        return(
            <tbody id="contactTable">{allContacts}</tbody>
        )
}
export default ContactsList;