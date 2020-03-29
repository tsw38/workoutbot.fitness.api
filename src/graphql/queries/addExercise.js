const fbAdmin = require('../../firebase/firebase');

const defaultResponse = {
    status: 406,
    code: 'auth/error',
    message: 'unacceptable'
}

const addExercise = async (args, {idtoken}) => {
    console.warn('this is the query', args);

    return defaultResponse;
    // if (!idtoken) {
    //     return defaultResponse;
    // }

    // const response = await fbAdmin.grantAdminRole({
    //     email,
    //     idtoken
    // })

    // return response;
};

module.exports = {
    addExercise
};