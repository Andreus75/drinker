const User = require('../dataBase/User');

module.exports = {
    createUser: async (req, res, next) => {
        try {
            console.log('createUser');
            // const { full_name, age, email, password } = req.body;
            // const newUser = {full_name, age, email, password};
            await User.create(req.body);
            res.json('ok');
        } catch (e) {
            res.json(e);
        }
    }
};
