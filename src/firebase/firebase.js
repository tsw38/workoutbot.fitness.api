const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');

const { grantAdminRole } = require('./auth');
const { addExercise } = require('./admin');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL
})

module.exports = {
    addExercise: addExercise(admin),
    grantAdminRole: grantAdminRole(admin)
}