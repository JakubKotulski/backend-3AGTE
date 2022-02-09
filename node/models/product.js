const mongoose = require("mongoose");
const User = require("./user");

const product = new mongoose.Schema({
    name: String,
    price: Number,
    url: String,
    sold: Boolean,
    section: String,
    // userID: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: User,
    // },
});

module.exports = mongoose.model("Product", product);