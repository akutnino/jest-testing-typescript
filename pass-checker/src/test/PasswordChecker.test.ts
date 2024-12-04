import { PasswordChecker, PasswordErrors } from '../app/PasswordChecker.ts';

describe('PasswordChecker test suite', () => {
	let systemUnderTest: PasswordChecker;

	beforeEach(() => {
		systemUnderTest = new PasswordChecker();
	});

	test('password with less than 8 chars is invalid', () => {
		const actualResult = systemUnderTest.checkPassword('1234567');
		expect(actualResult.valid).toBe(false);
		expect(actualResult.reasons).toContain(PasswordErrors.Short);
	});

	test('password with more than 8 chars is valid', () => {
		const actualResult = systemUnderTest.checkPassword('12345678aA');
		expect(actualResult.reasons).not.toContain(PasswordErrors.Short);
	});

	test('password with no upper case letter is invalid', () => {
		const actualResult = systemUnderTest.checkPassword('1234abcd');
		expect(actualResult.valid).toBe(false);
		expect(actualResult.reasons).toContain(PasswordErrors.No_Upper_Case);
	});

	test('password with upper case letter is valid', () => {
		const actualResult = systemUnderTest.checkPassword('1234AbcdE');
		expect(actualResult.reasons).not.toContain(PasswordErrors.No_Upper_Case);
	});

	test('password with no lower case letter is invalid', () => {
		const actualResult = systemUnderTest.checkPassword('1234ABCD');
		expect(actualResult.valid).toBe(false);
		expect(actualResult.reasons).toContain(PasswordErrors.No_Lower_Case);
	});

	test('password with lower case letter is valid', () => {
		const actualResult = systemUnderTest.checkPassword('1234aBCDe');
		expect(actualResult.reasons).not.toContain(PasswordErrors.No_Lower_Case);
	});

	test('password is completely valid', () => {
		const actualResult = systemUnderTest.checkPassword('1234ABcd');
		expect(actualResult.reasons).toEqual([]);
		expect(actualResult.valid).toBe(true);
	});
});
