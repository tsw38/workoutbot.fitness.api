import Auth from '../models/auth';
import { string } from '../types/globals';
import { authenticate } from '../queries/auth';

export default {
    type: Auth,
    args: {
        email: string
    },
    resolve: async (parent, args, {req}) => {
        return await authenticate(args, req.headers);
    }
};