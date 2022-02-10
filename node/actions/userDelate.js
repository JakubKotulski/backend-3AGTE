const User = require('../models/user')

const userdelateAction = async (req, res) => {
    try{
        const usertodelete = await User.findByIdAndRemove(req.params.id);
        res.status(200);
    } catch(err){
        console.log(err)
        res.send({err})
    }
}



module.exports = {userdelateAction}