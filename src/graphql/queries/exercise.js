const fbAdmin = require('../../firebase/firebase');

import {UNAUTHORIZED} from '../../errors';

export const addExercise = async (args, {idtoken}) => {
    if (!idtoken) {
        return UNAUTHORIZED;
    }

    const response = await fbAdmin.addExercise({
        exercise: args,
        idtoken
    })

    return response;
};

export const searchExercises = async (name, {idtoken}) => {
    if (!idtoken) {
        return UNAUTHORIZED;
    }

    const response = await fbAdmin.searchExercises({
        name,
        idtoken
    });

    return response;
}