const {Contact} = require("../dataBase");
const {ClientErrorNotFound, CONTACT_WITH_THIS_ID_IS_MISSING} = require("../configs/error-enum");

module.exports = {
    findContactById: async (req, res, next) => {
        try {
            const { contact_id } = req.params;

            const contact = await Contact.findOne({_id: contact_id});

            if (!contact) {
                return next({
                   message: CONTACT_WITH_THIS_ID_IS_MISSING,
                   status: ClientErrorNotFound
                });
            }

            req.contact = contact;

            next();
        } catch (e) {
            next(e);
        }
    }
}
