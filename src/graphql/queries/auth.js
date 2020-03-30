const fbAdmin = require('../../firebase/firebase');

import {UNAUTHORIZED} from '../../errors';

export const authenticate = async ({email}, {idtoken}) => {
    if (!idtoken) {
        return UNAUTHORIZED;
    }

    const response = await fbAdmin.grantAdminRole({
        email,
        idtoken
    })

    return response;
};