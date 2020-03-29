const { string } = require('../types/globals');

const Auth = require('../models/auth').default;

const {	authenticate } = require('../queries/auth');

exports.default = {
    type: Auth,
    args: {
        email: string
    },
    resolve: async (parent, args, {req}) => {
        return await authenticate(args, req.headers);
    }
};