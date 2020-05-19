const express = require('express');

// Users Model
const User = require('../../../models/user');

const router = express.Router();

// @route DELETE api/user/:id
// @desc Delete user
// @access Public
router.delete('/delete/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => user.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;