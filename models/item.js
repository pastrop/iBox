var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    producer: { type: String, required: false },
    vintage: { type: String, required: false },
    storeID: { type: String, required: false }
});

var Item = mongoose.model('Item', ItemSchema);

module.exports = Item;