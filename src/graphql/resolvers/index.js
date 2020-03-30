const authenticate = require('./auth').default;
const exercise = require('./exercise');

module.exports = {
    authenticate,
    ...exercise
}