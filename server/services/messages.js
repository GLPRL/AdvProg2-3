const mongoose = require('mongoose');
const Message = require('../models/messages');

const createMessage= async (chatId, currentUser, messageContent, messageId) =>{
    console.log("in createmsg in msgservice")
    const messagesModel = mongoose.model('messages', Message.schema, 'messages');

    //const messagesCollection = await messagesModel.collection.find().toArray();
    //console.log(messagesCollection)
    console.log("---------")
    const userMessages = await messagesModel.findById(chatId)
    console.log(userMessages);
    const messageDetails = {_id: messageId, sender: {username:currentUser}, created : Date() ,content: messageContent}
    console.log("---------")
    console.log(messageDetails)
    console.log("---------")
    if (userMessages.messages == null) {
        userMessages.messages = []
    }
    userMessages.messages.push(messageDetails);
    console.log(messageDetails)
    console.log(userMessages)
    return await userMessages.save();
}


module.exports = {
    createMessage
    };