const fbAdmin = require('../../firebase/firebase');

const defaultResponse = {
    status: 406,
    code: 'auth/error',
    message: 'unacceptable'
}

export const authenticate = async ({email}, {idtoken}) => {
    if (!idtoken) {
        return defaultResponse;
    }

    const response = await fbAdmin.grantAdminRole({
        email,
        idtoken
    })

    return response;
};