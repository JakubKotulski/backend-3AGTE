const User = require('../models/product')

const productDeletion = async (req, res) => {
    try{
        const producttodelete = await User.findByIdAndRemove(req.params.id);
        res.status(200);
    } catch(err){
        console.log(err)
        res.send({err})
    }
}



module.exports = {productDeletion}
