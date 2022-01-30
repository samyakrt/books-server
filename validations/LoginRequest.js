const { body } = require('express-validator');

module.exports = [
    body('email').notEmpty().isEmail(),
    body('password').notEmpty().isLength({ min: 5 })
]