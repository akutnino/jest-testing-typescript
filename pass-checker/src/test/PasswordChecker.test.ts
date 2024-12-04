import { PasswordChecker } from '../app/PasswordChecker.ts';

describe('PasswordChecker test suite', () => {
	let systemUnderTest: PasswordChecker;

	beforeEach(() => {
		systemUnderTest = new PasswordChecker();
	});

	test('should do nothing for the moment', () => {
		systemUnderTest.checkPassword();
	});
});
