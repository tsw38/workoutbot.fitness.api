import admin from 'firebase-admin';
import serviceAccount from './serviceAccount.json';

import { grantAdminRole as grantAdmin } from './auth';
import { 
    addExercise as fbAddExercise,
    getExercises as fbGetExercises
} from './admin';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL
})

export const grantAdminRole = grantAdmin(admin);
export const addExercise = fbAddExercise(admin);
export const getExercises = fbGetExercises(admin);
