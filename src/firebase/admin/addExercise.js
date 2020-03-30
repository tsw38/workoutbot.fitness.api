const defaultError = {
    error: 'NICE TRY ASSHOLE!!!!!!',
    status: 406
}

export const addExercise = (admin) => async ({exercise, idtoken}) => {
    if (!idtoken) {
        return defaultError
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

        return defaultError
    } catch (error) {
        return {
            code: error.code,
            message: error.message
        };
    }       
}