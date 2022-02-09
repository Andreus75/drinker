const {Contact} = require('../dataBase');
const {SuccessCreated} = require('../configs/error-enum');

module.exports = {
    createContact: async (req, res, next) => {
        try {
            console.log('createContact');
            const { name_manager, phone, email } = req.body;
            const contact = await Contact.create({name_manager, phone, email});

            req.contact = contact;

            next();
            // res.status(SuccessCreated).json(contact);
        } catch (e) {
            next(e);
        }
    }
};
