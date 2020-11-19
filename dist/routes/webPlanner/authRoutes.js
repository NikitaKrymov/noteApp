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
const authorizeUser = require('../../middleware/authorizeUser');
const encrypt = require('../../utils/encrypt');
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const setJWT = require('../../middleware/setJWT');
module.exports = (app, client) => {
    app.post('/api/webPlanner/createUser', authorizeUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { credentials: { username, password } } = req.body;
        try {
            const hashedPassword = yield encrypt(password);
            const newUser = new User({
                username: username,
                password: hashedPassword
            });
            newUser.save();
            res.send({
                code: 900,
                message: 'User has been successfully created!'
            });
        }
        catch (e) {
            res.send({
                code: 810,
                message: e
            });
        }
    }));
    app.get('/api/webPlanner/validateUsername', authorizeUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { username } = req.query;
        const existingUser = yield User.findOne({ username });
        if (existingUser) {
            console.log('User exists');
            const authError = {
                errorCode: 803,
                message: 'Username already exists'
            };
            res.send(authError);
        }
        else {
            console.log('Username does not exist');
        }
    }));
    app.post('/api/webPlanner/authenticateUser', authorizeUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { credentials: { username, password } } = req.body;
        const existingUser = yield User.findOne({ username });
        console.log(existingUser);
        if (existingUser) {
            bcrypt.compare(password, existingUser.password, (err, result) => {
                if (err) {
                    const authError = {
                        errorCode: 810,
                        message: err
                    };
                    res.send(authError);
                }
                else if (!result) {
                    const authError = {
                        errorCode: 810,
                        message: "Wrong Password"
                    };
                    res.send(authError);
                }
                else {
                    const token = setJWT(existingUser._id);
                    res.cookie('authorization', token, { maxAge: 100000 });
                    res.send({
                        code: 1000,
                        message: 'You have successfully logged in',
                        userData: existingUser
                    });
                }
            });
        }
        else {
            const authError = {
                errorCode: 811,
                message: "Username has not found"
            };
            res.send(authError);
        }
    }));
    app.get('/api/webPlanner/current_user', authorizeUser, (req, res) => {
        if (req.error) {
            res.send(req.error);
        }
        else {
            res.send({
                _id: req.userId
            });
        }
    });
    app.get('/api/webPlanner/logout', (req, res) => {
        try {
            res.clearCookie('authorization');
            console.log(req.cookies);
            res.send({
                status: 1000
            });
        }
        catch (e) {
            res.send({
                code: 810,
                message: 'Logout failed'
            });
        }
    });
};
//# sourceMappingURL=authRoutes.js.map