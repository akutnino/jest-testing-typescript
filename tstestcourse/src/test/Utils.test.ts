import { toUpperCase } from '../app/Utils.ts';

describe('Utils test suite', () => {
	test('should return uppercase of valid string', () => {
		// arrange:
		const systemUnderTest = toUpperCase;
		const expectedResult = 'ABC';

		// act:
		const actualResult = systemUnderTest('abc');

		// asset:
		expect(actualResult).toBe(expectedResult);
	});
});
