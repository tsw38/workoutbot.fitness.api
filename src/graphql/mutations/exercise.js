const AddExercise = require('../models/exercise');

const {	addExercise } = require('../queries/exercise');

const addExerciseMutation = {
    type: AddExercise.addModel,
    args: AddExercise.types,
    resolve: async (parent, args, {req}) => {
        return await addExercise(args, req.headers);
    }
}

module.exports = {
    addExercise: addExerciseMutation
}