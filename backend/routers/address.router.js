const router = require('express').Router();

const {userMiddleware} = require('../middlewares');
const {addressValidator} = require('../validators');
const {addressController} = require('../controllers');

router.post(
    '/',
    userMiddleware.isUserBodyValid(addressValidator.addressCreateValidator),
    addressController.createAddress
);

module.exports = router;
