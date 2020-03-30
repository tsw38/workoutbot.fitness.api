import admin from 'firebase-admin';
import serviceAccount from './serviceAccount.json';

import { grantAdminRole as grantAdmin } from './auth';
import { 
    addExercise as fbAddExercise,
    searchExercises as fbSearchExercises
} from './admin';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL
})

export const addExercise = fbAddExercise(admin);
export const grantAdminRole = grantAdmin(admin);
export const searchExercises = fbSearchExercises(admin);
