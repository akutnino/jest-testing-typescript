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

	describe('getStringInfo for arg My-String', () => {
		test('should return string length', () => {
			// arrage
			const systemUnderTest = getStringInfo;
			const expectedResult = 'My-string';

			// act
			const actualResult = systemUnderTest('My-String');

			// assert
			expect(actualResult).toHaveLength(expectedResult.length);
		});
		test('should return string in lower case', () => {
			const systemUnderTest = getStringInfo;
			const expectedResult = 'my-string';
			const actualResult = systemUnderTest('My-String');
			expect(actualResult.lowerCase).toBe(expectedResult);
		});
	});

	test.only('should return info for valid string', () => {
		// arrange:
		const systemUnderTest = getStringInfo;
		const expectedResult = 'my-string';

		// act:
		const actualResult = systemUnderTest('My-String');

		// assert:
		expect(actualResult.lowerCase).toBe(expectedResult); //use for primitive types / pass by value.
		expect(actualResult.extraInfo).toEqual({}); //use for object types / pass by reference.

		expect(actualResult.characters.length).toBe(9); // NOT CLEAN WAY.
		expect(actualResult.characters).toHaveLength(9); // CLEAN WAY.

		// prettier-ignore
		expect(actualResult.characters).toEqual(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g']);

		expect(actualResult.characters).toContain<string>('M');

		expect(actualResult.characters).toEqual(
			expect.arrayContaining(['S', 't', 'r', 'i', 'n', 'g', 'M', 'y', '-'])
		);

		expect(actualResult.extraInfo).not.toBe(undefined);
		expect(actualResult.extraInfo).not.toBeUndefined();
		expect(actualResult.extraInfo).toBeDefined();
		expect(actualResult.extraInfo).toBeTruthy();
	});
});
