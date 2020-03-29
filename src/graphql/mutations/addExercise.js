const AddExercise = require('../models/addExercise');

const {	addExercise } = require('../queries/addExercise');

exports.default = {
    type: AddExercise.model,
    args: AddExercise.types,
    resolve: async (parent, args, {req}) => {
        return await addExercise(args, req.headers);
    }
};