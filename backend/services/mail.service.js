const EmailTemplate = require('email-templates');
const nodemailer = require('nodemailer');
const path = require('path');

const allTemplate = require('../email-template');
const ErrorHandler = require('../errors/ErrorHandler');
const { ClientErrorBadRequest, WRONG_TEMPLATE_NAME } = require('../configs/error-enum');
const { USER_EMAIL, USER_PASSWORD } = require('../configs/config');

const templateParser = new EmailTemplate({
    views: {
        root: path.join(process.cwd(), 'email-template')
    }
});

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: USER_EMAIL,
        pass: USER_PASSWORD
    },

});

const sendMail = async (userEmail, emailAction, context = {}) => {
    const templateInfo = allTemplate[emailAction];

    if (!templateInfo) {
        throw new ErrorHandler({
            message: WRONG_TEMPLATE_NAME,
            status: ClientErrorBadRequest
        });
    }

    const html = await templateParser.render(templateInfo.templateName, context);

    return transporter.sendMail({
        from: 'No replay',
        to: userEmail,
        subject: templateInfo.subject,
        html
    });
};

module.exports = {
    sendMail
};

