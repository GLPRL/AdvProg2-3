import '../../../../stylesheets/chatWindow.css'
import pic from  '../../../../images/default.jpg'
import {registerData} from "../../../../login/Register";
import {reqUsername} from "../../../../login/Login";
function ContactTab() {
    return(
        <div className="userTab">
            <img src= {pic} alt="" className="user-tab-right-image rounded-circle" id="contactImage"></img>
            <span className="userName userTopLeft" id="contactUser"></span>
        </div>
    );
}
export default ContactTab;