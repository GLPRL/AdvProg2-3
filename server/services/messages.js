const mongoose = require('mongoose');
const Message = require('../models/messages');

const createMessage= async (chatId, currentUser, messageContent, messageId) =>{
    console.log("in createmsg in msgservice")
    const messagesModel = mongoose.model('messages', Message.schema, 'messages');
    const messagesCollection = await messagesModel.collection.find().toArray();
    
    console.log(messagesCollection)
    console.log("---------")
    const userMessages = messagesCollection
    const messageDetails = {_id: messageId, sender: currentUser, content: messageContent}
    console.log("---------")
    console.log(messageDetails)
    console.log("---------")
    userMessages.messages.push(messageDetails);
    console.log(messageDetails)
    console.log(userMessages)
    return await userMessages.save();
}


module.exports = {
    createMessage
    };