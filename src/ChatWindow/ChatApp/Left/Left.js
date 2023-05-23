import UserTab from "./UserTab/UserTab";
import ContactsMenu from "./ContactsMenu/ContactsMenu";
function Left(props) {
    return(
        <div className="contactBox  col-sm-4">
            <UserTab idCount={props.idCount} user={props.user} token={props.token}/>
            <ContactsMenu setCurrentUser={props.setCurrentUser} setCurrentChatId={props.setCurrentChatId} userContacts={props.userContacts}/>
        </div>
    );
}
export default Left;