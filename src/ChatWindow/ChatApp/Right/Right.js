import ContactTab from "./ContactTab/ContactTab";
import ChatMessages from "./ChatMessages/ChatMessages";
import ChatInteraction from "./ChatInteraction/ChatInteraction";
function Right(props) {
    return(
        <div className="contactBox border-right col-8">
            <ContactTab />
            <ChatMessages user={props.user} currentUser={props.currentUser} token={props.token} firstPrint={props.firstPrint} setfirstPrint={props.setfirstPrint} currentContactMsgs={props.currentContactMsgs}/>
            <ChatInteraction currentUser={props.currentUser} token={props.token} firstPrint={props.firstPrint} setfirstPrint={props.setfirstPrint} msgChangeHandler={props.msgChangeHandler}/>
        </div>
    );
}
export default Right;