const { id, string, integer, object, list } = require('../types/globals');
const responseType = require('../types/responseType').default;

const types = {
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

module.exports = {
    types,
    model: object({
        name: 'Exercise',
        description: 'Exercise',
        fields: () => types
    }),
    addModel: object({
        name: 'AddExercise',
        description: 'Add Exercise Mutation',
        fields: () => ({
            ...responseType,
            ...types,
        })
    })
}