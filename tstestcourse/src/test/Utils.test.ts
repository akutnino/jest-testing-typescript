import { getStringInfo, toUpperCase } from '../app/Utils.ts';

describe('Utils test suite', () => {
	test('should return uppercase of valid string', () => {
		// arrange:
		const systemUnderTest = toUpperCase;
		const expectedResult = 'ABC';

		// act:
		const actualResult = systemUnderTest('abc');

		// assert:
		expect(actualResult).toBe(expectedResult);
	});

	describe(`getStringInfo with agr: 'My-String'`, () => {
		test('returns string length', () => {
			const actualResult = getStringInfo('My-String');
			expect(actualResult.characters).toHaveLength(9);
		});

		test('returns string in lower case', () => {
			const actualResult = getStringInfo('My-String');
			expect(actualResult.lowerCase).toBe('my-string');
		});

		test('returns string in upper case', () => {
			const actualResult = getStringInfo('My-String');
			expect(actualResult.upperCase).toBe('MY-STRING');
		});

		test('returns correct string characters', () => {
			const actualResult = getStringInfo('My-String');
			// prettier-ignore
			expect(actualResult.characters).toEqual(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g']);
			expect(actualResult.characters).toContain<string>('M');
			expect(actualResult.characters).toEqual(
				expect.arrayContaining(['S', 't', 'r', 'i', 'n', 'g', 'M', 'y', '-'])
			);
		});

		test('returns defined extra info', () => {
			const actualResult = getStringInfo('My-String');
			expect(actualResult.extraInfo).toEqual({});
			expect(actualResult.extraInfo).not.toBe(undefined);
			expect(actualResult.extraInfo).not.toBeUndefined();
			expect(actualResult.extraInfo).toBeDefined();
			expect(actualResult.extraInfo).toBeTruthy();
		});
	});
});
