const express = require('express');
const router = express.Router();
const { createUser } = require('../controller/userController');

// [POST]: /api/user/register
router.post('/register', createUser);
module.exports = router;
