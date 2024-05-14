const { sendEmail } = require('../services/sendgrid.services');
function sendGridRoutes(req, res) {
  sendEmail(req, res);
}

module.exports = { sendGridRoutes }