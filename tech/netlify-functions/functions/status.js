const { getSuccess } = require('../helpers/auth');

exports.handler = async (event, context) =>
  getSuccess({ status: 'Online!' });