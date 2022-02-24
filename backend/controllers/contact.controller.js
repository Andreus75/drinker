const {Contact} = require('../dataBase');
const {SuccessCreated} = require('../configs/error-enum');

module.exports = {
    createContact: async (req, res, next) => {
        try {
            const { name_manager, phone, email } = req.body;
            const contact = await Contact.create({name_manager, phone, email});

            req.contact = contact;

            next();
        } catch (e) {
            next(e);
        }
    },

    getContactById: (req, res, next) => {
        try {
            const contact = req.contact;

            res.json(contact);
        } catch (e) {
            next(e);
        }
    }
};
