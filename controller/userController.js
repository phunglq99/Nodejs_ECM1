const User = require('../models/userModel');
// Dùng để show ra lỗi khi sử dụng với bất đồng bộ
const asyncHandler = require('express-async-handler');

const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
        // Create a new user
        const newUser = User.create(req.body);
        res.json(newUser);
    } else {
        throw new Error('User already Exixts');
    }
});

module.exports = { createUser };
