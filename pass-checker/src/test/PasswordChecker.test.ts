import { PasswordChecker } from '../app/PasswordChecker.ts';

describe('PasswordChecker test suite', () => {
	let systemUnderTest: PasswordChecker;

	beforeEach(() => {
		systemUnderTest = new PasswordChecker();
	});

	test('password with less than 8 chars is invalid', () => {
		const actualResult = systemUnderTest.checkPassword('1234567');
		expect(actualResult).toBe(false);
	});

	test('password with more than 8 chars is valid', () => {
		const actualResult = systemUnderTest.checkPassword('12345678');
		expect(actualResult).toBe(true);
	});

	test('password with no upper case char is invalid', () => {
		const actualResult = systemUnderTest.checkPassword('1234abcd');
		expect(actualResult).toBe(false);
	});

	test('password with a upper case char is valid', () => {
		const actualResult = systemUnderTest.checkPassword('1234Abcd');
		expect(actualResult).toBe(true);
	});

	test('password with no lower case char is invalid', () => {
		const actualResult = systemUnderTest.checkPassword('1234ABCD');
		expect(actualResult).toBe(false);
	});

	test('password with a lower case char is valid', () => {
		const actualResult = systemUnderTest.checkPassword('1234ABCd');
		expect(actualResult).toBe(true);
	});
});
