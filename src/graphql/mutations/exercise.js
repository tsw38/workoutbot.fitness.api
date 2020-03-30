import { addModel, types } from '../models/exercise';

import { addExercise as addExerciseQuery } from '../queries/exercise';

export const addExercise = {
    type: addModel,
    args: types,
    resolve: async (parent, args, {req}) => {
        return await addExerciseQuery(args, req.headers);
    }
}