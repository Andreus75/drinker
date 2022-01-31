const Joi = require('joi');
const {EMAIL_REGEXP, PASSWORD_REGEXP} = require('../configs/constants');

const userCreateValidator = Joi.object({
    first_name: Joi.string()
        .min(3)
        .max(30)
        .trim(),
    last_name: Joi.string()
        .min(2)
        .max(30)
        .trim(),
    age: Joi.number()
        .integer()
        .positive(),
    email: Joi.string()
        .regex(EMAIL_REGEXP),
    password: Joi.string()
        .regex(PASSWORD_REGEXP)
        .required(),
    avatar: Joi.string()
});

module.exports = {
    userCreateValidator
};

