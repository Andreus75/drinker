const {Restoration} = require("../dataBase");
const {ClientErrorNotFound, RESTORATION_WITH_THIS_ID_IS_MISSING} = require("../configs/error-enum");
module.exports = {
    findRestorationById: async (req, res, next) => {
        try {
            const { restoration_id } = req.params;

            const restoration = await Restoration.findOne({_id: restoration_id});

            if (!restoration) {
                return next({
                    message: RESTORATION_WITH_THIS_ID_IS_MISSING,
                    status: ClientErrorNotFound
                });
            }

            req.restoration = restoration;

            next();
        } catch (e) {
            next(e);
        }
    },

    findRestorationsFilter: (req, res, next) => {
        try {
            console.log('findRestorationsByFilter');
            const { min_check, max_check, vi_fi, parking, music } = req.query;
            console.log(min_check);
            console.log(max_check);
            console.log(vi_fi);
            next();
        } catch (e) {
            next(e);
        }
    }
}
