import responseType from '../types/responseType';
import { id, string, integer, object, list } from '../types/globals';

export const types = {
    id,
    name: string,
    muscleGroup: {
        type: list(string.type),
        resolve: ({muscleGroup}, args) => muscleGroup
    },
    interval: {
        type: list(integer.type),
        resolve: ({interval}, args) => interval
    }
};

export const model = object({
    name: 'Exercise',
    description: 'Exercise',
    fields: () => types
})

export const addModel = object({
    name: 'AddExercise',
    description: 'Add Exercise Mutation',
    fields: () => ({
        ...responseType,
        ...types,
    })
})