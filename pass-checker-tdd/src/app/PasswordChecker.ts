export enum PasswordErrors {
	SHORT = 'Password is too short',
	NO_UPPER_CASE = 'Upper case letter required',
	NO_LOWER_CASE = 'Lower case letter required',
	NO_NUMBER = 'at least one number required',
}

export interface CheckResult {
	valid: boolean;
	reasons: PasswordErrors[];
}

export class PasswordChecker {
	public checkPassword(password: string): CheckResult {
		const reasons: PasswordErrors[] = [];

		this.checkForLength(password, reasons);
		this.checkForUpperCase(password, reasons);
		this.checkForLowerCase(password, reasons);
		return {
			valid: reasons.length === 0 ? true : false,
			reasons,
		};
	}

	public checkAdminPassword(password: string): CheckResult {
		const basicCheck = this.checkPassword(password);
		this.checkForNumber(password, basicCheck.reasons);
		return {
			valid: basicCheck.reasons.length === 0 ? true : false,
			reasons: basicCheck.reasons,
		};
	}

	private checkForNumber(password: string, reasons: PasswordErrors[]) {
		const hadNumber = /\d/;
		if (!hadNumber.test(password)) reasons.push(PasswordErrors.NO_NUMBER);
	}

	private checkForLength(password: string, reasons: PasswordErrors[]) {
		if (password.length < 8) reasons.push(PasswordErrors.SHORT);
	}

	private checkForUpperCase(password: string, reasons: PasswordErrors[]) {
		const noUpperCase = [...password]
			.map((char) => {
				const isNumber = isFinite(Number(char));
				const isAlphabetChar =
					(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) ||
					(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90);
				if (!isAlphabetChar || isNumber) return false;

				const charToUpperCase = String.fromCharCode(char.charCodeAt(0)).toUpperCase();
				const issUpperCase = charToUpperCase === char;
				if (issUpperCase) return true;
				return false;
			})
			.every((bool) => bool === false);

		if (noUpperCase) reasons.push(PasswordErrors.NO_UPPER_CASE);
	}

	private checkForLowerCase(password: string, reasons: PasswordErrors[]) {
		const noLowerCase = [...password]
			.map((char) => {
				const isNumber = isFinite(Number(char));
				const isAlphabetChar =
					(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) ||
					(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90);
				if (!isAlphabetChar || isNumber) return false;

				const charToLowerCase = String.fromCharCode(char.charCodeAt(0)).toLowerCase();
				const issLowerCase = charToLowerCase === char;
				if (issLowerCase) return true;
				return false;
			})
			.every((bool) => bool === false);

		if (noLowerCase) reasons.push(PasswordErrors.NO_LOWER_CASE);
	}
}
