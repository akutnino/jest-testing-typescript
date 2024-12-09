import { calculateComplexity, toUpperCaseWithCB } from '../app/OtherUtils.ts';

// DUMMY OBJECTS: passed around but not used
// SPIES: tracks information about how a unit is called

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

	describe('Tracking callbacks WITHOUT Jest mocks', () => {
		// WRITE OUR OWN MOCKS:
		// MOCKS: preprogrammed with expectation

		let cbArgs: string[] = [];
		let timesCalled = 0;

		function callbackMock(arg: string) {
			cbArgs.push(arg);
			timesCalled += 1;
		}

		afterEach(() => {
			// clearing tracking fields.
			cbArgs = [];
			timesCalled = 0;
		});

		test('ToUpperCase - calls callback for invalid argument', () => {
			const actualResult = toUpperCaseWithCB('', callbackMock);
			expect(actualResult).toBeUndefined();
			expect(cbArgs).toContain('Invalid Argument');
			expect(timesCalled).toBe(1);
		});

		test('ToUpperCase - calls callback for valid argument', () => {
			const actualResult = toUpperCaseWithCB('ABC', callbackMock);
			expect(actualResult).toBe('ABC');
			expect(cbArgs).toContain('Called function with arg/s: ABC');
			expect(timesCalled).toBe(1);
		});
	});

	describe('Tracking callbacks WITH Jest mocks', () => {
		const callbackMock = jest.fn();

		afterEach(() => {
			jest.clearAllMocks();
		});

		test('ToUpperCase - calls callback for invalid argument', () => {
			const actualResult = toUpperCaseWithCB('', callbackMock);
			expect(actualResult).toBeUndefined();
			expect(callbackMock).toHaveBeenCalledWith('Invalid Argument');
			expect(callbackMock).toHaveBeenCalledTimes(1);
		});

		test('ToUpperCase - calls callback for valid argument', () => {
			const actualResult = toUpperCaseWithCB('ABC', callbackMock);
			expect(actualResult).toBe('ABC');
			expect(callbackMock).toHaveBeenCalledWith('Called function with arg/s: ABC');
			expect(callbackMock).toHaveBeenCalledTimes(1);
		});
	});
});
