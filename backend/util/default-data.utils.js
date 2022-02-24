const {User, Action} = require("../dataBase");
const {ADMIN} = require("../configs/user-role-enum");
const {passwordService, jwtService, mailService} = require("../services");
const {ACTION} = require("../configs/token-type-enum");
const {WELCOME} = require("../configs/email-action-enum");
const {userUtil} = require("../util");
const {userValidator} = require("../validators");
const {ClientErrorBadRequest} = require("../configs/error-enum");
module.exports = async (req, res, next) => {

    const user = await User.findOne({role: ADMIN});

    if (!user) {
        let user = {
            first_name: 'Andriy',
            last_name: 'Tryndey',
            age: 46,
            email: 'tryndeyandriy@gmail.com',
            password: 'Hello_World!1'
        }

        const { error, value } = userValidator.userCreateValidator.validate(user);

        if (error) {
            return next({
                message: new Error(error.details[0].message),
                status: ClientErrorBadRequest
            });
        }

        const hashPassword = await passwordService.hash(user.password);

        const newUser = await User.create({...user, password: hashPassword, role: ADMIN});

        const token = jwtService.createActionToken();

        await Action.create({token, type: ACTION, user_id: newUser._id});

        await mailService.sendMail(newUser.email, WELCOME, {userName: newUser.first_name, token});

        userUtil.createUserNormalization(newUser);
    }
}
