import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    }, 
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
        default: null
    }
})

const User = mongoose.model('Users', UserSchema);

module.exports = User;