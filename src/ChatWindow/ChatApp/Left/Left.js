import UserTab from "./UserTab/UserTab";
import ContactsMenu from "./ContactsMenu/ContactsMenu";
function Left(props) {
    return(
        <div className="contactBox  col-sm-4">
            <UserTab idCount={props.idCount}/>
            <ContactsMenu setCurrentUser={props.setCurrentUser}/>
        </div>
    );
}
export default Left;