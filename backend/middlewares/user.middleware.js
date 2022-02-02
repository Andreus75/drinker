const { User } = require('../dataBase');
const {
    ClientErrorBadRequest,
    USER_ALREADY_EXIST,
    ClientErrorNotFound,
    USER_WITH_THIS_ID_IS_MISSING
} = require('../configs/error-enum');

module.exports = {
    isUserBodyValid: (validator) => (req, res, next) => {
        try {
            const { error, value } = validator.validate(req.body);

            if (error) {

                return next({
                    message: new Error(error.details[0].message),
                    status: ClientErrorBadRequest
                });
            }

            req.body = value;

            next();
        } catch (e) {
            next(e);
        }
    },

    isUserEmailExist: async (req, res, next) => {
        try {
            const { email } = req.body;

            const user = await User.findOne({email});

            if (user) {
                next({
                    message: USER_ALREADY_EXIST,
                    status: ClientErrorNotFound
                });
            }

            req.user = user;

            next();
        } catch (e) {
            res.json(e);
        }
    },

    findUserById: async (req, res, next) => {
        try {
            const { user_id } = req.params;

            const findUser = await User.findOne({_id: user_id});

            if (!findUser) {
                return next({
                    message: USER_WITH_THIS_ID_IS_MISSING,
                    status: ClientErrorNotFound
                });
            }

            req.user = findUser;

            next();
        } catch (e) {
            next(e);
        }
    }
};
