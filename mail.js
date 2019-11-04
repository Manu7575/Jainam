const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: process.env.API_KEY  || 'adjahjfh',
        domain: process.env.DOMAIN    || 'ghdgshfghg'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = (email, message,subject, cb) => {
    const mailOptions = {
        from: email, 
        to: 'rajneesh.k.anand@hotmail.com',
        subject:'Software Inquery || Jainam Software' + ' - ' + subject,
        text: message
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            return cb(err, null);
        }
        return cb(null, data);
    });
}

module.exports = sendMail;