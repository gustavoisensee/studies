const {
  getUnauthorized, getSuccess, jwtVerify
} = require('../helpers/auth');

exports.handler = async function (event, context) {
  try {
    const decoded = jwtVerify(event);

    return getSuccess({ decoded });
  } catch (err) {
    return getUnauthorized({ error: err.message });
  }
};