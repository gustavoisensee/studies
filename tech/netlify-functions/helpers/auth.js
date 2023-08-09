const jwt = require('jsonwebtoken');

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const USER = process.env.USERNAME;
const PASS = process.env.PASSWORD;

const jwtSign = (data) =>
  jwt.sign(data, PRIVATE_KEY, {
    expiresIn: 60 * 60 // 1 hr
  });

const jwtVerify = (event) => {
  const token = event?.headers?.authorization || '';

  try {
    const user = jwt.verify(token, PRIVATE_KEY);
    return user;
  } catch {
    return undefined;
  }
}

const checkUser = (user, pass) =>
  user && pass && user === USER && pass === PASS;

const getUnauthorized = (data) => ({
  statusCode: 401,
  body: JSON.stringify({
    code: 401,
    message: 'Unauthorized',
    data
  })
});

const getSuccess = (data) => ({
  statusCode: 200,
  body: JSON.stringify(data)
});

const auth = (event, context, cb) => {
  const user = jwtVerify(event);
  if (!user) return getUnauthorized();

  return cb(user);
};

module.exports = {
  jwtSign,
  jwtVerify,
  checkUser,
  getUnauthorized,
  getSuccess,
  auth
};
