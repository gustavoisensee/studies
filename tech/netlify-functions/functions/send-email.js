const sendEmail = require('../helpers/email');

exports.handler = async function (event, context) {
  sendEmail();
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Email has been sent!' })
  };
};