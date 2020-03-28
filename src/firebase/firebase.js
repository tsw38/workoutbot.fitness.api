const admin = require('firebase-admin');
const adminGroup = require('./groups/admin');
const serviceAccount = require('./serviceAccount.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL
})

const grantAdminRole = async ({email, idToken}) => {
    try {
        const user = await admin.auth().getUserByEmail(email);
        const token = await admin.auth().verifyIdToken(idToken);

        console.warn(user, token);
    
        if (user.customClaims && user.customClaims.admin === true) {
            return {
                status: 200
            };
        }
    
        if (adminGroup.includes(email)) {
            const setAdmin = await admin.auth().setCustomUserClaims(user.uid, {
                admin: true
            });

            return {
                status: 200
            };
        } else {
            return {
                status: 200
            }
        }
    } catch (error) {
        return {
            code: error.code,
            message: error.message
        };
    }
}

module.exports = {
    grantAdminRole
}