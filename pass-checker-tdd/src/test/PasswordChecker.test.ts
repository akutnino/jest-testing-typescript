import { PasswordChecker, PasswordErrors } from '../app/PasswordChecker.ts';

describe('PasswordChecker test suite', () => {
	let systemUnderTest: PasswordChecker;

	beforeEach(() => {
		systemUnderTest = new PasswordChecker();
	});

	test('password with less than 8 chars is invalid', () => {
		const actualResult = systemUnderTest.checkPassword('1234567');
		expect(actualResult.valid).toBe(false);
		expect(actualResult.reasons).toContain(PasswordErrors.SHORT);
	});

	test('password with more than 8 chars is valid', () => {
		const actualResult = systemUnderTest.checkPassword('12345678');
		expect(actualResult.reasons).not.toContain(PasswordErrors.SHORT);
	});

	test('password with no upper case char is invalid', () => {
		const actualResult = systemUnderTest.checkPassword('1234abcd');
		expect(actualResult.valid).toBe(false);
		expect(actualResult.reasons).toContain(PasswordErrors.NO_UPPER_CASE);
	});

	test('password with a upper case char is valid', () => {
		const actualResult = systemUnderTest.checkPassword('1234Abcd');
		expect(actualResult.reasons).not.toContain(PasswordErrors.NO_UPPER_CASE);
	});

	test('password with no lower case char is invalid', () => {
		const actualResult = systemUnderTest.checkPassword('1234ABCD');
		expect(actualResult.valid).toBe(false);
		expect(actualResult.reasons).toContain(PasswordErrors.NO_LOWER_CASE);
	});

	test('password with a lower case char is valid', () => {
		const actualResult = systemUnderTest.checkPassword('1234ABCd');
		expect(actualResult.reasons).not.toContain(PasswordErrors.NO_LOWER_CASE);
	});

	test('complex password is valid', () => {
		const actualResult = systemUnderTest.checkPassword('1234abcDE');
		expect(actualResult.valid).toBe(true);
		expect(actualResult.reasons).toHaveLength(0);
	});

	test('Admin password with no number is invalid', () => {
		const actualResult = systemUnderTest.checkAdminPassword('abcdABCD');
		expect(actualResult.valid).toBe(false);
		expect(actualResult.reasons).toContain(PasswordErrors.NO_NUMBER);
	});

	test('Admin password with number is valid', () => {
		const actualResult = systemUnderTest.checkAdminPassword('abcdABCD7');
		expect(actualResult.reasons).not.toContain(PasswordErrors.NO_NUMBER);
	});
});
