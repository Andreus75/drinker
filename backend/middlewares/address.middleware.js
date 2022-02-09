const {Address} = require("../dataBase");
const {ClientErrorNotFound, THIS_ADDRESS_USE_ALREADY} = require("../configs/error-enum");
module.exports = {
    isAddressExist: async (req, res, next) => {
        try {
            const { city, street, number } = req.body;

            const address = await Address.findOne({city, street, number});

            if (address) {
                return next({
                    message: THIS_ADDRESS_USE_ALREADY,
                    status: ClientErrorNotFound
                });
            }

            next();
        } catch (e) {
            next(e);
        }
    }
}
