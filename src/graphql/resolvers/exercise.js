const { id, string } = require('../types/globals');

const {model} = require('../models/exercise');

const {	authenticate } = require('../queries/auth');

export const getExercise = {
    type: model,
    args: {
        id,
        name: string
    },
    resolve: async (parent, args, {req}) => {
        return {
            id: '1231234513fwdfe',
            name: 'THIS IS A SAMPLE RESPONSE FROM QUERYING AN EXERCISE'
        }
        // return await authenticate(args, req.headers);
    }
}