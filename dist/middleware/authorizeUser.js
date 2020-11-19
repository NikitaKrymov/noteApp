"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
const setJWT = require('../middleware/setJWT');
module.exports = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.cookies['authorization'];
    if (!token) {
        const authError = {
            code: 401,
            message: 'Not authorized'
        };
        req.error = authError;
        next();
    }
    else {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, userId) => {
            if (err) {
                const authError = {
                    code: 403,
                    message: 'Forbbiden'
                };
                req.error = authError;
                next();
            }
            else {
                req.userId = userId.userId;
                console.log(req.userId);
                const refreshToken = setJWT(userId.userId);
                res.cookie('authorization', refreshToken, { maxAge: 100000 });
                next();
            }
        });
    }
});
//# sourceMappingURL=authorizeUser.js.map