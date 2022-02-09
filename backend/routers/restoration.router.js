const router = require('express').Router();

const {userMiddleware, addressMiddleware} = require('../middlewares');
const {restorationValidator, addressValidator, contactValidator} = require('../validators');
const {restorationController, addressController, contactController} = require("../controllers");

router.post(
    '/',
    userMiddleware.isUserBodyValid(restorationValidator.restorationCreateValidator),
    addressMiddleware.isAddressExist,
    addressController.createAddress,
    contactController.createContact,
    restorationController.createRestoration
);

module.exports = router;
