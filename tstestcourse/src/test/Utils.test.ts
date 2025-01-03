import { getStringInfo, StringUtils, toUpperCase } from '../app/Utils.ts';

describe('Utils test suite', () => {
	// Structure of a unit test (AAA Principles)
	test('should return uppercase of valid string', () => {
		// arrange:
		const systemUnderTest = toUpperCase;
		const expectedResult = 'ABC';

		// act:
		const actualResult = systemUnderTest('abc');

		// assert:
		expect(actualResult).toBe(expectedResult);
	});

	// Jest Hooks Intro (beforeEach, afterEach)
	describe.only('StringUtils test', () => {
		let systemUnderTest: StringUtils;

		beforeEach(() => {
			systemUnderTest = new StringUtils();
			console.log('Setup');
		});

		afterEach(() => {
			// Most often for clearing mocks.
			console.log('Teardown');
		});

		test.only('return correct upperCase', () => {
			const actualResult = systemUnderTest.toUpperCase('abc');
			expect(actualResult).toBe('ABC');
			console.log('Actual Test');
		});
	});

	// Testing for Errors
	describe('StringUtils test for Errors', () => {
		let systemUnderTest: StringUtils;

		beforeEach(() => {
			systemUnderTest = new StringUtils();
			console.log('Setup');
		});

		test('return correct upperCase', () => {
			const actualResult = systemUnderTest.toUpperCase('abc');
			expect(actualResult).toBe('ABC');
			console.log('Actual Test');
		});

		// First way to test Errors (Functions)
		test('should throw error on invalid argument - function', () => {
			function expectError() {
				systemUnderTest.toUpperCase('');
			}

			expect(expectError).toThrow('Invalid argument');
		});

		// Second way to test Errors (Arrow Functions)
		test('should throw error on invalid argument - arrow function', () => {
			expect(() => systemUnderTest.toUpperCase('')).toThrow('Invalid argument');
		});

		// Third way to test Errors (Try Catch Block)
		test('should throw error on invalid argument - try catch block', (done) => {
			try {
				systemUnderTest.toUpperCase('');
				done('GetStringInfo should throw error for invalid arg');
			} catch (error) {
				expect(error).toBeInstanceOf(Error);
				expect(error).toHaveProperty('message', 'Invalid argument');
				done();
			}
		});
	});

	// Parametrized tests ( test.each([])('', () => {}) )
	describe('toUpperCase examples', () => {
		test.each([
			{ input: 'abc', expectedResult: 'ABC' },
			{ input: 'My-String', expectedResult: 'MY-STRING' },
			{ input: 'def', expectedResult: 'DEF' },
		])('$input toUpperCase should be $expected', ({ input, expectedResult }) => {
			const actualResult = toUpperCase(input);
			expect(actualResult).toBe(expectedResult);
		});
	});

	// Clean multiple tests structure w/ assertions and matchers
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
