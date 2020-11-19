import { AuthenticationError } from "../../client/src/types/interfaces";

const authorizeUser = require('../../middleware/authorizeUser');
const encrypt = require('../../utils/encrypt');
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const setJWT = require('../../middleware/setJWT');

module.exports = (app: any, client: any) => {

    app.post('/api/webPlanner/createUser', authorizeUser, async (req: any, res: any) => {
        const { credentials: { username, password }} = req.body;
        try {
            const hashedPassword = await encrypt(password);
            const newUser = new User({
                username: username,
                password: hashedPassword
            });
            newUser.save();
            res.send({
                code: 900,
                message: 'User has been successfully created!'
            });
        } catch (e) {
            res.send({
                code: 810,
                message: e
            })
        }
    });

    app.get('/api/webPlanner/validateUsername', authorizeUser, async (req: any, res: any) =>{
        const { username } = req.query;
        const existingUser = await User.findOne({ username });
        if (existingUser){ 
            console.log('User exists')
            const authError: AuthenticationError = {
                errorCode: 803,
                message: 'Username already exists'
            }
            res.send(authError);
        } else {
            console.log('Username does not exist')
        }
    })

    app.post('/api/webPlanner/authenticateUser', authorizeUser, async (req: any, res: any) => {
        const { credentials: { username, password } } = req.body;
        const existingUser = await User.findOne({ username });
        console.log(existingUser)
        if (existingUser) {
            bcrypt.compare(password, existingUser.password, (err: any, result: boolean) => {
                if (err) {
                    const authError: AuthenticationError = {
                        errorCode: 810,
                        message: err
                    }
                    res.send(authError);
                } else if (!result) {
                        const authError: AuthenticationError = {
                            errorCode: 810,
                            message: "Wrong Password"
                        }
                        res.send(authError);
                    } else {
                        const token = setJWT(existingUser._id);
                        res.cookie('authorization', token, { maxAge: 100000 });
                        res.send({
                            code: 1000,
                            message: 'You have successfully logged in',
                            userData: existingUser
                        });
                    }
            })
        } else {
            const authError: AuthenticationError = {
                errorCode: 811,
                message: "Username has not found"
            }
            res.send(authError);
        }
    });

    app.get('/api/webPlanner/current_user', authorizeUser, (req: any, res: any) => {
        if (req.error){
            res.send(req.error);
        } else {
            res.send({
                _id: req.userId
            });
        }
    });

    app.get('/api/webPlanner/logout', (req: any, res: any) => {
        try {
            res.clearCookie('authorization');
            console.log(req.cookies);
            res.send({
                status: 1000
            })
        } catch (e) {
            res.send({
                code: 810,
                message: 'Logout failed'
            })
        }
    })
}