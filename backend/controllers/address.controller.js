const {Address} = require('../dataBase');
const {SuccessCreated} = require('../configs/error-enum');

module.exports = {
    createAddress: async (req, res, next) => {
        try {
            const { city, street, number } = req.body;

            const address = await Address.create({city, street, number});

            req.address = address;

            next();
        } catch (e) {
            next(e);
        }
    },

    getAddressById: (req, res, next) => {
        try {
            const address = req.address;

            res.json(address);
        } catch (e) {
            next(e);
        }
    }
};
