const router = require('express').Router();

const {userMiddleware, contactMiddleware} = require('../middlewares');
const {contactValidator} = require('../validators');
const {contactController} = require('../controllers');

router.post(
    '/',
    userMiddleware.isUserBodyValid(contactValidator.contactCreateValidator),
    contactController.createContact
);

router.get('/:contact_id', contactMiddleware.findContactById, contactController.getContactById);

module.exports = router;
