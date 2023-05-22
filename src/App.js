import './App.css';
import './stylesheets/chatWindow.css'
import './stylesheets/login.css'
import './images/background.jpg'
import './images/profilePic3.jpg'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './login/Login'
import Register from './login/Register'
import ChatWindow from './ChatWindow/ChatWindow'

function App() {
    return (
        <Router>
        <html lang="en">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/chat" element={<ChatWindow />} />
            </Routes>
    </html>
        </Router>
    );
}

export default App;
