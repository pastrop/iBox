var mongoose = require('mongoose');
//var timestamps = require('mongoose-times'); //Placeholder for timestamp by mongoose-times

var ItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    producer: { type: String, required: false },
    vintage: { type: String, required: false },
    storeID: { type: String, required: false },
    timeStamp : { type : Date, default: Date.now }
});
//ItemSchema.plugin(timestamps, {created: "created_at"});//Adding a timestamp by mongoose-times
var Item = mongoose.model('Item', ItemSchema);

module.exports = Item;