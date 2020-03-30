import search from '../../functions/search';

import {UNAUTHORIZED} from '../../errors';

export const searchExercises = (admin) => async ({name, idtoken}) => {
    if (!idtoken) {
        return UNAUTHORIZED
    }

    try {
        const token = await admin.auth().verifyIdToken(idtoken);

        if (token.admin) {
            const exercises = await search(name);

            return {
                name,
                exercises,
                status: 200
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