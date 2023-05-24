const { createUser } = require('../controllers/users');

const express = require('express');

const router = express.Router();

router.post('/', createUser);

module.exports = router;