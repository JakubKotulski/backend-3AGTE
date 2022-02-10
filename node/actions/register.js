const bcrypt = require("bcryptjs")
const User = require('../models/user')

const registerAction = async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username});

        if (user) {
            return res.json({ err: "User exists"});
        }
    
        const hashedPassword = await bcrypt.hash(req.body.password, 15);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        }); 
        await newUser.save();
        return res.json(newUser); 
    } catch (err) {
        return res.json({ err });
    }
}

module.exports = {registerAction}