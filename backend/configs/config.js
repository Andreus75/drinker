module.exports = {
    MONGO_CONNECT_URL: process.env.MONGO_CONNECT_URL || 'mongodb://localhost:27017/drinker',
    PORT: process.env.PORT || 5000,
    HOST: process.env.HOST,

    HTTP: 'http://localhost:3000/',

    JWT_ACCESS_TOKEN: process.env.JWT_ACCESS_TOKEN || 'aaa',
    JWT_ACTION_TOKEN: process.env.JWT_ACTION_TOKEN || 'ccc',
    JWT_REFRESH_TOKEN: process.env.JWT_REFRESH_TOKEN || 'rrr',
    JWT_ACTION_FORGOT_SECRET: process.env.JWT_ACTION_FORGOT_SECRET || 'fff',

    USER_EMAIL: process.env.USER_EMAIL,
    USER_PASSWORD: process.env.USER_PASSWORD,
};

