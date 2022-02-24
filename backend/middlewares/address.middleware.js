const {Address} = require('../dataBase');
const {
    ClientErrorNotFound,
    THIS_ADDRESS_USE_ALREADY,
    ADDRESS_WITH_THIS_ID_IS_MISSING
} = require('../configs/error-enum');
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
    },

    findAddressById: async (req, res, next) => {
      try {
          const { address_id } = req.params;

          const address = await Address.findOne({_id: address_id});

          if (!address) {
              return next({
                  message: ADDRESS_WITH_THIS_ID_IS_MISSING,
                  status: ClientErrorNotFound
              });
          }

          req.address = address;

          next();
      } catch (e) {
          next(e);
      }
    }
}
