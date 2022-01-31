const { User } = require('../dataBase');
module.exports = {
    isUserEmailExist: async (req, res, next) => {
        try {
            const { email } = req.body;
            console.log(email);
            const user = await User.findOne({email});
            if (user) {
                next({
                    message: 'eror',
                    status: 201
                });
            }
            next();
        } catch (e) {
            res.json(e);
        }
    }
};
