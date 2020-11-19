"use strict";
const jwt = require('jsonwebtoken');
require('dotenv').config();
module.exports = (userId) => {
    const token = jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '100000' });
    return token;
};
//# sourceMappingURL=setJWT.js.map