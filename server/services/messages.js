const mongoose = require('mongoose');
const Message = require('../models/messages');
const User = require('../models/users');
const Chat = require('../models/chats');

const createMessage= async (chatId, currentUser, messageContent, messageId) =>{
    //console.log("in createmsg in msgservice")
    const messagesModel = mongoose.model('messages', Message.schema, 'messages');
 
    const userMessages = await messagesModel.findById(chatId)
    const currDate = Date()
    const messageDetails = {_id: messageId, sender: {username:currentUser}, created : currDate ,content: messageContent}
    if (userMessages.messages == null) {
        userMessages.messages = []
    }
    userMessages.messages.unshift(messageDetails);

    const user =await User.findOne({username: currentUser});
    //console.log(user);
    const resData = {
        id : messageId, created : currDate, sender : {
            username: currentUser, displayName: user.displayName, profilePic : user.profilePic }, content: messageContent
        }
    //console.log(resData);
    await userMessages.save();

    const updateData = {idOfChat: chatId, idOfMessage: messageId, sender: {username:currentUser}, created: currDate, content: messageContent}
    //await updateLastMessages(updateData);
    return resData
}

const getMessages = async (chatId) =>{
    const messagesModel = mongoose.model('messages', Message.schema, 'messages');
    console.log(chatId + "---> in getMessages")
    const userMessages = await messagesModel.findById(chatId)
    const msgsArray = userMessages.messages
    if (msgsArray == null) {
        return []
    }
    //console.log(msgsArray);
    return msgsArray
}

const updateLastMessages = async (msgData) => {
    const user1 = msgData.sender.username;
    //console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    //console.log(user1)
    const userChatCollection = mongoose.model(user1, Chat.schema, user1);
    
    console.log(msgData.idOfChat)
    const lastM = {_id: msgData.idOfMessage, created: msgData.created, content: msgData.content}
    const chatDocInUser = await userChatCollection.findOneAndUpdate({_id:msgData.idOfChat}, {lastMessage:lastM}, {new: true})
    //console.log(chatDocInUser)
    console.log("=====")
    //console.log(lastM);
    console.log(chatDocInUser._id + " is the id after the update");
    const contactUsername = chatDocInUser.user.username
    const contactChatCollection = mongoose.model(contactUsername, Chat.schema, contactUsername);
    const contactDocInUser = await contactChatCollection.findOneAndUpdate({_id:msgData.idOfChat}, {lastMessage:lastM}, {new: true})
}



module.exports = {
    createMessage,
    getMessages
    };