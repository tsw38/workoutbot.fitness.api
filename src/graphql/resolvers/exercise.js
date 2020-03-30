import { string } from '../types/globals';

import {searchModel} from '../models/exercise';

import { searchExercises as searchQuery } from '../queries/exercise';

export const searchExercises = {
    type: searchModel,
    args: {
        name: string
    },
    resolve: async (parent, args, {req}) => {
        if (args.name.length < 3) {
            return []
        };

        const result = await searchQuery(args.name, req.headers);

        return result
    }
}