const {
  getUnauthorized, getSuccess,
  checkUser, jwtSign
} = require('../helpers/auth');

exports.handler = async (event, context) => {
  const { user, pass } = event.queryStringParameters;
  
  if (checkUser(user, pass)) {
    const token = jwtSign({ user });
  
    return getSuccess({ token });
  }

  return getUnauthorized();
};