const bcrypt = require('bcryptjs');

const generateHash = (password) => {
    const salt = bcrypt.genSaltSync(10);
    return  bcrypt.hashSync(password, salt);
}

const comparePassword = (password,hash) => {
    return bcrypt.compare(password,hash);
}

module.exports = {
    generateHash,
    comparePassword
}