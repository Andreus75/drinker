const {authMiddleware, userMiddleware} = require('../middlewares');
const {authController} = require('../controllers');
const {userValidator} = require('../validators');
const router = require('express').Router();

router.get('/activate/:token', authMiddleware.checkActivateToken, authController.activate);

router.post(
    '/',
    userMiddleware.isUserBodyValid(userValidator.userEmailEndPasswordValidator),
    authMiddleware.authToEmail,
    authMiddleware.authToPassword,
    authController.login
);

router.post(
    '/password/forgot',
    userMiddleware.isUserBodyValid(userValidator.emailValidator),
    authController.sendMailForgotPassword
);
router.put(
    '/password/forgot',
    userMiddleware.isUserBodyValid(userValidator.passwordValidator),
    authMiddleware.checkAccessNewToken,
    authController.setNewPasswordAfterForgot
);

module.exports = router;
