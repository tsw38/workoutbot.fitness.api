import {UNAUTHORIZED} from '../../errors';

export const addExercise = (admin) => async ({exercise, idtoken}) => {
    if (!idtoken) {
        return UNAUTHORIZED
    }

    try {
        const token = await admin.auth().verifyIdToken(idtoken);

        if (token.admin) {
            await admin.firestore().collection('exercises').doc().set(exercise);
            return {
                status: 200,
                message: `${exercise.name} - was successfully added`
            }
        }

        return UNAUTHORIZED
    } catch (error) {
        return {
            error: error.code,
            message: error.message
        };
    }       
}