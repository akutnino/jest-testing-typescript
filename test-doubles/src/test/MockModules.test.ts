jest.mock('../app/OtherUtils.ts', () => ({
	...jest.requireActual('../app/OtherUtils.ts'),
	calculateComplexity: () => 10,
}));

jest.mock('uuid', () => ({
	v4: () => '123',
}));

import * as OtherUtils from '../app/OtherUtils.ts';

describe('module test', () => {
	test('calculate complexity', () => {
		const actualResult = OtherUtils.calculateComplexity({} as any);
		expect(actualResult).toBe(10);
	});

	test('keep other functions', () => {
		const actualResult = OtherUtils.toUpperCase('abc');
		expect(actualResult).toBe('ABC');
	});

	test('string with unique values', () => {
		const actualResult = OtherUtils.toLowerCaseWithID('ABC');
		expect(actualResult).toBe('abc123');
	});
});
