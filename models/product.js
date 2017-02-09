var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    imagePath: {type: String, required: true},
    name: {type: String, required: true},
    name_lower: String,
    description: {type: String, required: true},
    price: {type: Number, required: true},
    console: {
        type: String,
        enum: []
    },
    genre: String,
    brand: String,
    rating: {
        type: String,
        enum: []
    },
    inStockQuantity: Number,
});

module.exports = mongoose.model('Product', schema);
