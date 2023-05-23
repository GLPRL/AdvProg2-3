import ContactsList from "./ContactsList/ContactsList";
function ContactsMenu(props) {
    return(
        <div className="contactScroll">
            <table className="table table-hover test">
                <ContactsList token={props.token} setCurrentContactMsgs={props.setCurrentContactMsgs} setCurrentUser={props.setCurrentUser} setCurrentChatId={props.setCurrentChatId} userContacts={props.userContacts}/>
            </table>
        </div>
    );
}
export default ContactsMenu;