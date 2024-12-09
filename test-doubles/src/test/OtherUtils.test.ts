import { calculateComplexity, toUpperCaseWithCB } from '../app/OtherUtils.ts';

// DUMMY OBJECTS: passed around but not used
// SPIES: tracks information about how a unit is called
// MOCKS: preprogrammed with expectation

describe('OtherUtils test suite', () => {
	test('should calculate complexity', () => {
		// STUBS: incomplete objects used as arguments.
		const someInfo = {
			length: 5,
			extraInfo: {
				fieldOne: 'Some Info',
				fieldTwo: 'Some More Info',
			},
		};
		const actualResult = calculateComplexity(someInfo as any);
		expect(actualResult).toBe(10);
	});

	test('ToUpperCase - calls callback for invalid argument', () => {
		// FAKES: simplified working implementation of external services, it takes a shortcut
		const fakeFunction = () => {};
		const actualResult = toUpperCaseWithCB('', fakeFunction);
		expect(actualResult).toBeUndefined();
	});

	test('ToUpperCase - calls callback for valid argument', () => {
		// FAKES: simplified working implementation of external services, it takes a shortcut
		const fakeFunction = () => {};
		const actualResult = toUpperCaseWithCB('abc', fakeFunction);
		expect(actualResult).toBe('ABC');
	});
});
