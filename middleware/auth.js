require('dotenv').config()

const secret = process.env.SECRET_KEY
const jwt = require('jsonwebtoken');

const AuthMiddleware = (req,res,next) => {
    
    const token = req.headers['x-token'];
    if(!token) {
        return res.status(401).json({
            message: `Unauthorized`
        })
    }
    jwt.verify(token,secret,(error) => {
        if(error) {
            return res.status(401).json({
                message: 'Unauthorized'
            })
        }
    })
    next()

}

module.exports = AuthMiddleware