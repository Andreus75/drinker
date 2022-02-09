const {Address} = require('../dataBase');
const {SuccessCreated} = require('../configs/error-enum');

module.exports = {
    createAddress: async (req, res, next) => {
        try {
            console.log('createAddress');
            const { city, street, number } = req.body;

            const address = await Address.create({city, street, number});

            req.address = address;
next();
            // res.status(SuccessCreated).json(address);
        } catch (e) {
            next(e);
        }
    }
};
