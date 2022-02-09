const Joi = require('joi');

const reviewCreateValidator = Joi.object({
    rating: Joi.string()
        .trim(),
    text: Joi.string()
        .trim(),
    check: Joi.number()
        .positive()
});

module.exports = {
    reviewCreateValidator
};
