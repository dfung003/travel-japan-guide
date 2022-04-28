const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    imageOne: String,
    pointsOfInterest: { type: String, required: true },
    imageTwo: String,
    popularFood: { type: String, required: true }
})

module.exports = mongoose.model('Article', articleSchema);