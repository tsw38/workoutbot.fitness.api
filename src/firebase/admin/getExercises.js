const defaultError = {
    error: 'NICE TRY ASSHOLE!!!!!!',
    status: 406
}

const getExercises = (admin) => async ({idtoken}) => {
    // if (!idtoken) {
    //     return defaultError
    // }

    try {
        const token = await admin.auth().verifyIdToken(idtoken);

        if (token.admin) {
            const exercises = await admin.firestore().collection('exercises').get();

            console.warn(exercises, '----------------------------------------------------')
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

module.exports = {
    getExercises
}