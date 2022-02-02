const {User, Auth, ActionForgot} = require('../dataBase');

const {USER_IS_ACTIVE, SuccessOK, USER_NOT_FOUND, ClientErrorNotFound} = require('../configs/error-enum');
const {jwtService, mailService, passwordService} = require('../services');
const {userUtil} = require('../util');
const {tokenTypeEnum, emailActionEnum} = require('../configs');
const {HTTP} = require('../configs/config');
const {AUTHORIZATION} = require('../configs/constants');

module.exports = {
    activate: async (req, res, next) => {
        try {
            const { _id, first_name, last_name } = req.user;

            await User.updateOne({_id}, {is_active: true});

            res.status(SuccessOK).json(first_name + ' ' + last_name + ' ' + USER_IS_ACTIVE);
        } catch (e) {
            next(e);
        }
    },

    login: async (req, res, next) => {
        try {
            const user = req.user;

            const tokenPair = jwtService.generateTokenPair();

            await User.updateOne(user, {is_login: true});

            await Auth.create({...tokenPair, user_id: user._id});

            const userNormalization = userUtil.userNormalization(user);

            res.json({userNormalization, ...tokenPair});
        } catch (e) {
            next(e);
        }
    },

    sendMailForgotPassword: async (req, res, next) => {
        try {
            const { email } = req.body;

            const user = await User.findOne({email});

            if (!user) {
                return next({
                    message: USER_NOT_FOUND,
                    status: ClientErrorNotFound
                });
            }

            const actionForgotToken = jwtService.generateForgotActionToken(tokenTypeEnum.FORGOT_PASSWORD);

            await ActionForgot.create({
                token_forgot: actionForgotToken,
                token_type: tokenTypeEnum.FORGOT_PASSWORD,
                user_id: user._id
            });

            await mailService.sendMail(
                email,
                emailActionEnum.FORGOT_PASSWORD,
                {forgotPasswordUrl: HTTP + `auth/password/forgot/new?token=${actionForgotToken}`}
            );

            res.json('Ok');
        } catch (e) {
            next(e);
        }
    },

    setNewPasswordAfterForgot: async (req, res, next) => {
        try {
            const token = req.get(AUTHORIZATION);
            const { user, user: { _id, email, first_name } } = req;
            const { password } = req.body;

            const hashNewPassword = await passwordService.hash(password);

            await User.findByIdAndUpdate(_id, {password: hashNewPassword});

            await ActionForgot.deleteOne({token});

            await Auth.deleteMany({user_id: user._id});

            await mailService.sendMail(
                email,
                emailActionEnum.FORGOT_PASSWORD,
                {userName: first_name}
            );

            res.json('ok');
        } catch (e) {
            next(e);
        }
    }
};
