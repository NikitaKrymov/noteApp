const bcrypt = require('bcryptjs');

module.exports = async (string: string) => {
    return bcrypt.hash(string, 10)
}