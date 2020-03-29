const { string, integer, object, list } = require('../types/globals');
const responseType = require('../types/responseType').default;

const types = {
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
    model: object({
        name: 'AddExercise',
        description: 'Add Exercise Mutation',
        fields: () => ({
            ...responseType,
            ...types,
        })
    }),
    types
}