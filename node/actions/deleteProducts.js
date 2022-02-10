const User = require('../models/product')

const deleteProduct = async (req, res) => {
    try{
        const producttodelete = await User.findByIdAndRemove(req.params.id);
        res.status(200);
    } catch(err){
        console.log(err)
        res.send({err})
    }
}



module.exports = {deleteProduct}
