const chatController = require('../controllers/chats');

const express = require('express');

const router = express.Router();

router.post('/', chatController.createChat);
router.get('/', chatController.getChats);
router.get('/:id', chatController.getChat);
module.exports = router;