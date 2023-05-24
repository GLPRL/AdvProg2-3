import '../../../../stylesheets/chatWindow.css'
import pic from  '../../../../images/default.jpg'
import {registerData} from "../../../../login/Register";
import {reqUsername} from "../../../../login/Login";
function ContactTab(props) {
    return(
        <div className="userTab">
            <img src= {`data:image/jpeg;base64, ${props.currentContactImage}`} alt="" className="user-tab-right-image rounded-circle" id="contactImage"></img>
            <span className="userName userTopLeft" id="contactUser"></span>
            <span className="userName userTopLeft" id="contactUser">{props.currentContactDisplayName}</span>
        </div>
    );
}
export default ContactTab;