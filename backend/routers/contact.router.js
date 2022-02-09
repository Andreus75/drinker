const router = require('express').Router();

const {userMiddleware} = require('../middlewares');
const {contactValidator} = require('../validators');
const {contactController} = require('../controllers');

router.post(
    '/',
    userMiddleware.isUserBodyValid(contactValidator.contactCreateValidator),
    contactController.createContact
);

module.exports = router;
