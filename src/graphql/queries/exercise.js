const fbAdmin = require('../../firebase/firebase');

const defaultResponse = {
    status: 406,
    code: 'auth/error',
    message: 'unacceptable'
}

export const addExercise = async (args, {idtoken}) => {
    // if (!idtoken) {
    //     return defaultResponse;
    // }

    const response = await fbAdmin.addExercise({
        exercise: args,
        idtoken
    })

    return response;
};