const { User } = require('~models');
const jwt = require('jsonwebtoken');
const { comparePassword } = require('~utility/password');
const app_secret = process.env.SECRET_KEY
class UserController {

    async register(req, res) {
        try {
            const { email, name, password } = req.body;
            await User.create({ email,name,password });
            return res.status(201).json({
                message:"User Created Successfully."
            })
        } catch (error) {
            return res.status(500).json({ 
                message: "Server error"
            })
        }
    }

    generateToken(user) {
        return jwt.sign({
            payload: {
                user
            }
        },app_secret,{
            expiresIn: process.env.EXPIRES_IN
        })
    }
     async login(req,res) {

        const { email,password } = req.body;
        try {

            const user = await User.findOne({
                email
            })

            
            if(!user) {
                return res.status(422).json({
                    message: 'invalid email or password'
                });
            }

            if(!comparePassword(password,user.password)) {
                return res.status(422).json({
                    message: 'invalid email or password'
                });
            }
            const token = this.generateToken(user)

            return res.json({
                token
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                error
            })
        }
    }

}

module.exports = UserController