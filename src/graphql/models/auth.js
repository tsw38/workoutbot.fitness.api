const { string, integer, object } = require('../types/globals');

exports.default = object({
	name: 'Auth',
	description: 'Authentication',
	fields: () => ({
        code: string,
        message: string,
        status: integer
    })
});