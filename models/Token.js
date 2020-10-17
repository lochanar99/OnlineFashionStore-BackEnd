const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//token created and used for email verification during user registeration
const tokenSchema = new mongoose.Schema({
    _userId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'user'},
    token: {type: String, required: true},
    createdAt: {type: Date, required: true, default: Date.now, expires: 43200 } // token expires in 12 hours
});

const Token = mongoose.model('token', tokenSchema);

module.exports = Token;