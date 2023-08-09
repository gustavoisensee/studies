const { getSuccess, auth } = require('../helpers/auth');

exports.handler = async (event, context) => auth(
  event,
  context,
  () => getSuccess({ message: 'Hello World' })
);