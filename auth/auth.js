import passport from 'passport';
import { Strategy } from 'passport-local';

import UserModel from '../models/userModel.js';


passport.use(
    'signup',
    new Strategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    async (email, password, done) => {
        try {
            const user = await UserModel.findOne({ email });
            if (user) {
                return done(null, false, { message: 'Email already exists' });
            }
            const newUser = await UserModel.create({ email, password });
            return done(null, newUser);
        } catch (error) {
            return done(error);
        }
    })
)

export default passport;