const jwt = require('jsonwebtoken');
const { JWT_ACTION_TOKEN, JWT_ACCESS_TOKEN, JWT_REFRESH_TOKEN, JWT_ACTION_FORGOT_SECRET} = require('../configs/config');
const {tokenTypeEnum} = require('../configs');
const ErrorHandler = require('../errors/ErrorHandler');
const {INVALID_TOKEN, ClientErrorUnauthorized, ServerErrorInternal} = require('../configs/error-enum');

module.exports = {
    createActionToken: () => {
        const actionToken = jwt.sign({}, JWT_ACTION_TOKEN, {expiresIn: '24h'});

        return actionToken;
    },

    verifyToken: async (token, tokenType = tokenTypeEnum.ACTION) => {
        try {
            let secret = '';

            switch (tokenType) {
                case tokenTypeEnum.ACTION:
                    secret = JWT_ACTION_TOKEN;
                    break;
            }

            await jwt.verify(token, secret);
        } catch (e) {
            throw new ErrorHandler(INVALID_TOKEN, ClientErrorUnauthorized);
        }
    },

    generateTokenPair: () => {
        const access_token = jwt.sign({}, JWT_ACCESS_TOKEN, {expiresIn: '30m'});
        const refresh_token = jwt.sign({}, JWT_REFRESH_TOKEN, {expiresIn: '30d'});

        return {
            access_token,
            refresh_token
        };
    },

    generateForgotActionToken: (actionTokenType) => {
        try {
            let secret;

            switch (actionTokenType) {
                case tokenTypeEnum.FORGOT_PASSWORD:
                    secret = JWT_ACTION_FORGOT_SECRET;
                    break;
                default:
                    throw new ErrorHandler(INVALID_TOKEN, ServerErrorInternal);
            }

            const generate_forgot_token = jwt.sign({}, secret, {expiresIn: '24h'});

            return generate_forgot_token;
        } catch (e) {
            throw new ErrorHandler(INVALID_TOKEN, ClientErrorUnauthorized);
        }
    }
};

