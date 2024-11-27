import { toUpperCase } from '../app/Utils.ts';

describe('Utils test suite', () => {
	test('should return uppercase', () => {
		const result = toUpperCase('abc');
		expect(result).toBe('ABC');
	});
});
