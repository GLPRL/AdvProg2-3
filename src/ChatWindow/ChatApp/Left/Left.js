import UserTab from "./UserTab/UserTab";
import ContactsMenu from "./ContactsMenu/ContactsMenu";
function Left(props) {
    return(
        <div className="contactBox  col-sm-4">
            <UserTab idCount={props.idCount} user={props.user} token={props.token}/>
            <ContactsMenu setCurrentUser={props.setCurrentUser} setCurrentChatId={props.setCurrentChatId}/>
        </div>
    );
}
export default Left;