const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccount.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL
})

const getExercises = async () => {
    const snapshot = await admin.firestore().collection('exercises').get();

    const data = Array.from(snapshot.docs).map(doc => {
        return {
            id: doc.id,
            ...doc.data()
        }
    });

    return data;
}

// getExercises()