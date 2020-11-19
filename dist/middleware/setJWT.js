"use strict";
var jwt = require('jsonwebtoken');
require('dotenv').config();
module.exports = function (userId) {
    var token = jwt.sign({ userId: userId }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '100000' });
    return token;
};
//# sourceMappingURL=setJWT.js.map