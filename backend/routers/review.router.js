const router = require('express').Router();

const {userMiddleware} = require('../middlewares');
const {reviewValidator} = require('../validators');
const {reviewController} = require('../controllers');

router.post(
    '/',
    userMiddleware.isUserBodyValid(reviewValidator.reviewCreateValidator),
    reviewController.createReview
);

module.exports = router;
