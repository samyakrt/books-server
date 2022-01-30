const { User } = require('~models');

class UserController {

    async register(req, res) {
        try {
            const { email, name, password } = req.body;
            await User.create({ email,name,password });
            return res.status(201).json({
                message:"User Created Successfully."
            })
        } catch (error) {
            console.log({error})
            return res.status(500).json({ 
                message: "Server error"
            })
        }
    }

    async login(req,res) {
        try {
            
        } catch (error) {
            
        }
    }
}

module.exports = new UserController