const User = require('../dataBase/User');
const { passwordService, jwtService, mailService } = require('../services');
const { Action } = require('../dataBase');
const { WELCOME } = require('../configs/email-action-enum');
const { SuccessCreated, SuccessNoContent } = require('../configs/error-enum');
const { ACTION } = require('../configs/token-type-enum');
const {userUtil} = require('../util');

module.exports = {
    createUser: async (req, res, next) => {
        try {
            const { password, email, first_name } = req.body;

            const hashPassword = await passwordService.hash(password);

            const user = await User.create({...req.body, password: hashPassword});

            const token = jwtService.createActionToken();

            await Action.create({token, type: ACTION, user_id: user._id});

            await mailService.sendMail(email, WELCOME, {userName: first_name, token});

            const userNormalize = userUtil.createUserNormalization(user);

            res
                .status(SuccessCreated)
                .json(userNormalize);
        } catch (e) {
            next(e);
        }
    },

    getUsers: async (req, res, next) => {
        try {
            const users = await User.find();

            res.json(users);
        } catch (e) {
            next(e);
        }
    },

    updateUser: async (req, res, next) => {
        try {
            const { user_id } = req.params;
            const { first_name, last_name, age } = req.body;

            const userUpdate = await User.findByIdAndUpdate({_id: user_id}, {first_name, last_name, age}, {new: true});

            res.status(SuccessCreated).json(userUpdate);
        } catch (e) {
            next();
        }
    },

    deleteUser: async (req, res, next) => {
        try {
            const user = req.user;

            await User.deleteOne(user);

            res.sendStatus(SuccessNoContent);
        } catch (e) {
            next(e);
        }
    }
};
