const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { jwtToken } = require('../../../config/index');
const { loginValidation } = require('../../middlewares/validation');

// Users Model
const User = require('../../../models/user');

const router = express.Router();

// @route GET api/user
// @desc Get user
// @access Public
router.get('/login', async (req, res) => {
    // Validation
    const { error } = loginValidation(req.body);
    if( error ) return res.status(400).send(error.details[0].message);

    // Checking if email exists
    const user = await User.findOne({ email: req.body.email });
    if( !user ) return res.status(400).send('Email is not correct');

    // Checking the password
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if ( !validPass ) return res.status(400).send('Password is not correct');

    // Create and assign token
    const token = jwt.sign({ _id: user._id }, jwtToken.secretKey);
    res.header('auth-token', token).send(token);
});

module.exports = router;