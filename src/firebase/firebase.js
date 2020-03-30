const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');

const { grantAdminRole } = require('./auth');
const { addExercise, getExercises } = require('./admin');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL
})

module.exports = {
    addExercise: addExercise(admin),
    getExercises: getExercises(admin),
    grantAdminRole: grantAdminRole(admin)
}