const Joi = require('joi');

const addressCreateValidator = Joi.object({
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
        .required()
});

module.exports = {
    addressCreateValidator
};
