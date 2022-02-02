const router = require('express').Router();

const { userController } = require('../controllers');
const { userMiddleware} = require('../middlewares');
const {userValidator} = require('../validators');

router.post(
    '/',
    userMiddleware.isUserBodyValid(userValidator.userCreateValidator),
    userMiddleware.isUserEmailExist,
    userController.createUser
);

router.get('/', userController.getUsers);

router.get('/:user_id');

router.put(
    '/:user_id',
    userMiddleware.isUserBodyValid(userValidator.userUpdateValidator),
    userMiddleware.findUserById,
    userController.updateUser
);

router.delete('/:user_id', userMiddleware.findUserById, userController.deleteUser);

module.exports = router;
