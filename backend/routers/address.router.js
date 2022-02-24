const router = require('express').Router();

const {userMiddleware, addressMiddleware} = require('../middlewares');
const {addressValidator} = require('../validators');
const {addressController} = require('../controllers');

router.post(
    '/',
    userMiddleware.isUserBodyValid(addressValidator.addressCreateValidator),
    addressController.createAddress
);

router.get('/:address_id', addressMiddleware.findAddressById, addressController.getAddressById);

module.exports = router;
