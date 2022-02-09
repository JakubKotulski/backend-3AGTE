const Product = require("../models/product");

const updateProduct = async (req, res) => {
    try {
        const { name, price, url, section } = req.body;
        await Product.updateOne({ _id: req.params.id }, { $set: {name, price, url, section} });
        res.status(200);
    } catch (e) {
        console.log("err ", e);
    }
}

module.exports = { updateProduct }