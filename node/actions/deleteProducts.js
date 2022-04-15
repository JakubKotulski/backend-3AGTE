const Product = require("../models/product")

const deleteProduct = async (req, res) => {
    try{
        await Product.findByIdAndRemove(req.params.id);
        res.status(200);
    }
    catch(err){
        console.log("err ", err);
    }
}

module.exports = {deleteProduct}
