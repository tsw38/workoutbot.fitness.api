import { string, integer, object } from '../types/globals';

export default object({
	name: 'Auth',
	description: 'Authentication',
	fields: () => ({
        code: string,
        message: string,
        status: integer
    })
});