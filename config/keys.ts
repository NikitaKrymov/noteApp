if (process.env.NODE_ENV === 'production'){
    console.log('Returning prod keys');
    module.exports = require('./prodKeys');
} else {
    console.log('Returning dev keys');
    module.exports = require('./devKeys');
}