const messageService = require('../services/messages')
const tokenVerifer = require('../services/token')
const idGetter = require('../services/ids')

const createMessage = async (req, res) => {
    if(!req.headers.authorization){
       return res.status(401).send();
    }
    const token = req.headers.authorization.split(' ')[1]
    const validity =  await tokenVerifer.isValidTokenWithDetails(token)
    const currentUser = validity.username
    if(!validity){
        res.status(401).send();
    }

    const messageId = await idGetter.nextId("messages");
    const messageContent = req.body.msg
    const chatId = req.params.id
    res.json(await messageService.createMessage(chatId , currentUser, messageContent, messageId));

}

const getMessages = async(req, res) => {
    if(!req.headers.authorization){
       return res.status(401).send();
    }
    const token = req.headers.authorization.split(' ')[1]
    const validity =  await tokenVerifer.isValidTokenWithDetails(token)

    if(!validity){
        res.status(401).send();
    }

    res.json(await messageService.getMessages(req.params.id));
}

module.exports = {
    createMessage,
    getMessages
};