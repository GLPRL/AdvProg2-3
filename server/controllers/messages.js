const messageService = require('../services/messages')
const tokenVerifer = require('../services/token')
const idGetter = require('../models/ids')
const userGetter = require('../models/users')

const createMessage = async (req, res) => {
    console.log("in createmsg in controller")
    if(!req.headers.authorization){
        console.log("im in the reqheaders")
       return res.status(401).send();
    }
    console.log("im near token");
    const token = req.headers.authorization.split(' ')[1]
    const validity =  await tokenVerifer.isValidTokenWithDetails(token)
    const currentUser = validity.username
    if(!validity){
        console.log("the token is invalid!");
        res.status(401).send();
    }

    const messageId = await idGetter.nextId("messages");
    console.log(messageId);
    const messageContent = req.body.msg
    console.log(messageContent);
    const chatId = req.params.id
    console.log(req.params);
    res.json(await messageService.createChat(chatId , currentUser, messageContent, messageId));

}

module.exports = {
    createMessage
};