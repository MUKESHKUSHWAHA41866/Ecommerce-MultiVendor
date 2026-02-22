const nodemailer = require('nodemailer');
async function sendVerificationEmail(to, subject, text) {
    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: process.env.GMAIL_USER || 'your email',
            pass: process.env.GMAIL_APP_PASSWORD || 'your gmail app password' 
        }
    });

    const mailOptions = {
        from: process.env.GMAIL_USER || 'your email',
        to,
        subject,
        text
    };

    await transporter.sendMail(mailOptions);
}

module.exports = { sendVerificationEmail };
