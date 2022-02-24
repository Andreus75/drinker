const router = require('express').Router();

const {userMiddleware, addressMiddleware, fileMiddleware, restorationMiddleware} = require('../middlewares');
const {restorationValidator, addressValidator, contactValidator} = require('../validators');
const {restorationController, addressController, contactController} = require("../controllers");

router.get('/', restorationController.getRestorations);

router.get(
    '/filters',
    // restorationMiddleware.findRestorationsFilter,
    restorationController.getRestorationsFilter
);

router.post(
    '/',
    userMiddleware.isUserBodyValid(restorationValidator.restorationCreateValidator),
    fileMiddleware.checkRestorationPhoto,
    addressMiddleware.isAddressExist,
    addressController.createAddress,
    contactController.createContact,
    restorationController.createRestoration
);

router.get(
    '/:restoration_id',
    restorationMiddleware.findRestorationById,
    restorationController.getRestorationById
);



module.exports = router;
