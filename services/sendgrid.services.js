const sgMail = require('@sendgrid/mail');
require('dotenv').config();

function sendEmail(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: process.env.EMAIL_TO,
    from: process.env.EMAIL_FROM,
    subject: req.body.subject,
    text: `From ${req.body.fromEmail},\n` + req.body.text
  };

  sgMail.send(msg)
    .then(() => {
      res.status(200).json({
        data: { ok: true },
        status: 200,
        message: "EMAIL_SENT"
      })
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      res.status(500).json({
        data: { ok: false },
        status: 500,
        message: "EMAIL_NOT_SENT"
      })
    });
}

module.exports = { sendEmail }