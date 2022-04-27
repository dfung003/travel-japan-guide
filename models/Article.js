const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    population: { type: Number, required: true }
})

module.exports = mongoose.model('Article', articleSchema);