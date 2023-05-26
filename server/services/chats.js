const Chat = require('../models/chats');
const createChat= async (username) =>{
        const chat = new Chat ({username: username});
        return await chat.save();
}

const getChat = async (id) => {
        
}


module.exports = {createChat};