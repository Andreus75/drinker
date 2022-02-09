const {Review} = require('../dataBase');
const {SuccessCreated} = require('../configs/error-enum');

module.exports = {
    createReview: async (req, res, next) => {
        try {
            const review = await Review.create({...req.body});

            res.status(SuccessCreated).json(review);
        } catch (e) {
            next(e);
        }
    }
};
