const Joi = require('joi');
const { EMAIL_REGEXP } = require('../configs/constants');
const {daysEnum} = require("../configs");

const restorationCreateValidator = Joi.object({
    name: Joi.string()
        .min(2)
        .max(40)
        .required()
        .trim(),
    persons: Joi.number()
        .integer()
        .positive()
        .required(),
    average_check: Joi.number()
        .positive()
        .required(),
    start_day_work: Joi.string()
        .allow(...Object.values(daysEnum))
        .required(),
    end_day_work: Joi.string()
        .allow(...Object.values(daysEnum))
        .required()
        .trim(),
    weekend: Joi.string()
        .allow(...Object.values(daysEnum))
        .trim(),
    start_hour: Joi.string()
        .trim(),
    end_hour: Joi.string()
        .trim(),
    city: Joi.string()
        .min(2)
        .max(30)
        .required()
        .trim(),
    street: Joi.string()
        .min(2)
        .max(30)
        .required()
        .trim(),
    number: Joi.number()
        .integer()
        .positive()
        .required(),
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
    restorationCreateValidator
};
