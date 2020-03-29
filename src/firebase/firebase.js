const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');
const {
    grantAdminRole
} = require('./auth');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL
})

module.exports = {
    grantAdminRole: grantAdminRole(admin)
}