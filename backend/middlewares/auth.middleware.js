const { User, Action, ActionForgot } = require('../dataBase');
const {
    USER_EMAIL_OR_PASSWORD_IS_WRONG,
    ClientErrorNotFound, INVALID_TOKEN,
    ClientErrorUnauthorized
} = require('../configs/error-enum');
const { jwtService, passwordService } = require('../services');
const { tokenTypeEnum } = require('../configs');
const ErrorHandler = require('../errors/ErrorHandler');
const { AUTHORIZATION } = require('../configs/constants');
module.exports = {
    authToEmail: async (req, res, next) => {
        try {
            const { email } = req.body;

            const user = await User.findOne(
                {email})
                .select('+password')
                .lean();

            if (!user) {
                return next({
                    message: USER_EMAIL_OR_PASSWORD_IS_WRONG,
                    status: ClientErrorNotFound
                });
            }

            req.user = user;

            next();
        } catch (e) {
            next(e);
        }
    },

    authToPassword: async (req, res, next) => {
        try {
            const { password } = req.body;
            const { password: hashPassword } = req.user;

            await passwordService.compare(password, hashPassword);

            next();
        } catch (e) {
            next(e);
        }
    },

    checkActivateToken: async (req, res, next) => {
        try {
            const { token } = req.params;

            await jwtService.verifyToken(token, tokenTypeEnum.ACTION);

            const {user_id: user, _id} = await Action.findOne({token, type: tokenTypeEnum.ACTION}).populate('user_id');

            if (!user) {
                throw new ErrorHandler(INVALID_TOKEN, ClientErrorUnauthorized);
            }

            req.user = user;

            await Action.deleteOne({_id});

            next();
        } catch (e) {
            next(e);
        }
    },

    checkAccessNewToken: async (req, res, next) => {
        try {
            const token = req.get(AUTHORIZATION);

            if (!token) {
                return next({
                    message: INVALID_TOKEN,
                    status: ClientErrorUnauthorized
                });
            }

            await jwtService.verifyToken(token, tokenTypeEnum.FORGOT_PASSWORD);

            const tokenForgotNew = await ActionForgot.findOne({token, type: tokenTypeEnum.FORGOT_PASSWORD}).populate('user_id');

            if (!tokenForgotNew) {
                return next({
                    message: INVALID_TOKEN,
                    status: ClientErrorUnauthorized
                });
            }

            req.user = tokenForgotNew.user_id;

            next();
        } catch (e) {
            next(e);
        }
    }
};
