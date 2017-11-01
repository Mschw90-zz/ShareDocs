const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    documents: [{
        type: Schema.ObjectId,
        ref: 'Docs'
    }]
});

var User = mongoose.model('User', userSchema)

export default User
