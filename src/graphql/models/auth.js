import { object } from '../types/globals';
import responseType from '../types/responseType';

export default object({
	name: 'Auth',
	description: 'Authentication',
	fields: () => responseType
});