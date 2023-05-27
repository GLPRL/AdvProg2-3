const mongoose = require('mongoose');
const Message = require('../models/messages');
const User = require('../models/users');

const createMessage= async (chatId, currentUser, messageContent, messageId) =>{
    //console.log("in createmsg in msgservice")
    const messagesModel = mongoose.model('messages', Message.schema, 'messages');
 
    const userMessages = await messagesModel.findById(chatId)
    const currDate = Date()
    const messageDetails = {_id: messageId, sender: {username:currentUser}, created : currDate ,content: messageContent}
    userMessages.messages.push(messageDetails);

    const user =await User.findOne({username: currentUser});
    console.log(user);
    const resData = {
        id : messageId, created : currDate, sender : {
            username: currentUser, displayName: user.displayName, profilePic : user.profilePic }, content: messageContent
        }
    console.log(resData);
    await userMessages.save();
    return resData
}

const getMessages = async (chatId) =>{
    const messagesModel = mongoose.model('messages', Message.schema, 'messages');
    const userMessages = await messagesModel.findById(chatId)
    const msgsArray = userMessages.messages
    console.log(msgsArray);
}



module.exports = {
    createMessage,
    getMessages
    };