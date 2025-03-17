let mongoose = require('mongoose');
let productSchema = new mongoose.Schema({
    name:{type: String, required: true, unique: true},
    price:{type: Number, default: 0, min: 0},
    imgURL:{type: String, required: true},
    description:{type: String, required: true},
    quantity:{type: Number, required: true, min: 0}
}, {timestamps: true});
module.exports = mongoose.model('product',productSchema);