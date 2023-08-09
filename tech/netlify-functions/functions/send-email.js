const { auth, getSuccess } = require('../helpers/auth');
const sendEmail = require('../helpers/email');

exports.handler = async (event, context) => auth(
  event,
  context,
  () => {
    sendEmail();
    return getSuccess({ message: 'Email has been sent!' })
  }  
);
