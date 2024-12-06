export enum PasswordErrors {
	SHORT = 'Password is too short',
	NO_UPPER_CASE = 'Upper case letter required',
	NO_LOWER_CASE = 'Lower case letter required',
}

export interface CheckResult {
	valid: boolean;
	reasons: PasswordErrors[];
}

export class PasswordChecker {
	public checkPassword(password: string): CheckResult {
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

		const reasons: PasswordErrors[] = [];

		if (password.length < 8) reasons.push(PasswordErrors.SHORT);
		if (noUpperCase || noLowerCase) reasons.push(PasswordErrors.NO_UPPER_CASE);
		if (noUpperCase || noLowerCase) reasons.push(PasswordErrors.NO_LOWER_CASE);
		return {
			valid: reasons.length === 0 ? true : false,
			reasons,
		};
	}
}
