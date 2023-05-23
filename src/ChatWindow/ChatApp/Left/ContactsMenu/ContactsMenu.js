import ContactsList from "./ContactsList/ContactsList";
function ContactsMenu(props) {
    return(
        <div className="contactScroll">
            <table className="table table-hover test">
                <ContactsList setCurrentUser={props.setCurrentUser} setCurrentChatId={props.setCurrentChatId}/>
            </table>
        </div>
    );
}
export default ContactsMenu;