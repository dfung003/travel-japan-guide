const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: String
})

module.exports = mongoose.model('Comment', commentSchema);