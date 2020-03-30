import {default as authenticate} from './auth';
const exercise = require('./exercise');

module.exports = {
    authenticate,
    ...exercise
}