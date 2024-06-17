const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    itemName: String,
    stats: String,
    cost: Number,
    description: String
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
