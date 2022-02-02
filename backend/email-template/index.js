const {emailActionEnum} = require('../configs');

module.exports = {
    [emailActionEnum.WELCOME]: {
        templateName: 'welcome',
        subject: 'Welcome'
    },

    [emailActionEnum.FORGOT_PASSWORD]: {
        templateName: 'forgot_password',
        subject: 'Everybody forgot something, dont worry'
    },

    [emailActionEnum.CHANGE_FORGOT_PASSWORD]: {
        template: 'change-forgot-password',
        subject: 'Your password was change'
    }
};
