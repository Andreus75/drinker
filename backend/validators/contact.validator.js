const Joi = require('joi');
const {EMAIL_REGEXP} = require('../configs/constants');

const contactCreateValidator = Joi.object({
    name_manager: Joi.string()
        .min(2)
        .max(30)
        .required()
        .trim(),
    phone: Joi.string()
        .required()
        .trim(),
    email: Joi.string()
        .regex(EMAIL_REGEXP)
        .required()
});

module.exports = {
    contactCreateValidator
};
