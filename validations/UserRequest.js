const { body } = require('express-validator');
const { User } = require('~models');

module.exports = [
    body('name').notEmpty(),
    body('email').notEmpty().isEmail().custom(async (email) => {
        if (!email) {
            return;
        }

        const exists = await User.findOne({ where: { email } });
        if (exists) {
            throw new Error("Email already taken")
        }
        return true;
    }),
    body('password').notEmpty().isLength({ min: 5 })
]