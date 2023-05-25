const chatController = require('../controllers/chats');

const express = require('express');

const router = express.Router();

router.post('/', chatController.createUser);
router.get('/', chatController.createUser);
module.exports = router;