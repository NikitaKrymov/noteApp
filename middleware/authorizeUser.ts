import {  } from "module";

const jwt = require('jsonwebtoken');
const setJWT = require('../middleware/setJWT');

module.exports = async (req: any, res: any, next:any) => {
    const token = req.cookies['authorization'];
    if (!token) {
        const authError = {
            code: 401,
            message: 'Not authorized'
        }
        req.error = authError;
        next();
    } else {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err: any, userId: any) => {
            if (err) {
                const authError = {
                    code: 403,
                    message: 'Forbbiden'
                };
                req.error = authError;
                next();
            } else {
                req.userId = userId.userId;
                console.log(req.userId);
                const refreshToken = setJWT(userId.userId);
                res.cookie('authorization', refreshToken, { maxAge: 100000 });
                next();
            }
        })
    }
}