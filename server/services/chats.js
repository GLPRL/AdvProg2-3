const mongoose = require('mongoose');
const Chat = require('../models/chats');


const createChat= async (chatId, currentUser, contactUser, contactDisplayName, contactProfilePic) =>{
        const userChatCollection = mongoose.model(currentUser, Chat.schema, currentUser);
        
        const contactDetails = {username: contactUser, displayName: contactDisplayName, profilePic: contactProfilePic}
        //console.log(contactDetails)
        const chat = new userChatCollection({_id: chatId,user: contactDetails},);
        return await chat.save();
}

const getChat = async (id) => {

}

const getChats = async (username) => {
        const userChatCollection = mongoose.model(username, Chat.schema, username);
        const temp = await userChatCollection.collection.find().toArray();
        // console.log(temp)
        return (temp)
}


module.exports = {
        createChat,
        getChat,
        getChats
        };