const mongoose = require("mongoose");
const User = require("./user");

const history = new mongoose.Schema({
    items: Array,
    price: Number,
    date: String,
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
    },
});

module.exports = mongoose.model("History", history);