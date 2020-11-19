const mongoose = require('mongoose');
const keys = require('../config/keys');

module.exports = async () => {
    try {
        const client = await mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
        console.log('Mongo DB has been successfully connected');
        return client;
    } catch (e) {
        console.log(e)
    }
}