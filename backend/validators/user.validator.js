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
        .regex(EMAIL_REGEXP)
        .required(),
    password: Joi.string()
        .regex(PASSWORD_REGEXP)
        .required(),
    avatar: Joi.string()
});

const userUpdateValidator = Joi.object({
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
        .positive()
});

const userEmailEndPasswordValidator = Joi.object({
    email: Joi.string()
        .regex(EMAIL_REGEXP)
        .required(),
    password: Joi.string()
        .regex(PASSWORD_REGEXP)
        .required()
});

const emailValidator = Joi.object({
    email: Joi.string()
        .regex(EMAIL_REGEXP)
        .required()
});

const passwordValidator = Joi.object({
    email: Joi.string()
        .regex(PASSWORD_REGEXP)
        .required()
});

module.exports = {
    userCreateValidator,
    userUpdateValidator,
    userEmailEndPasswordValidator,
    emailValidator,
    passwordValidator
};

