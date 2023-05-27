const chatController = require('../controllers/chats');
const messageController = require('../controllers/messages');

const express = require('express');

const router = express.Router();

router.post('/', chatController.createChat);
router.get('/', chatController.getChats);
router.get('/:id', chatController.getChat);        // didnt write the function for this yet!
router.post('/:id/Messages', messageController.createMessage);
module.exports = router;