export enum PasswordErrors {
	Short = 'Password is too short',
	No_Upper_Case = 'Upper case letter Required',
	No_Lower_Case = 'Lower case letter Required',
}

export interface CheckResult {
	valid: boolean;
	reasons: PasswordErrors[];
}

export class PasswordChecker {
	public checkPassword(password: string): CheckResult {
		const noUpperCaseLetter = [...password]
			.reduce((acc: boolean[], curr, _, array) => {
				const numbersArray = array.filter((element) => Number(element));
				const elementIsNumber = numbersArray.includes(curr);
				const elementIsLowerCase = !elementIsNumber && curr === curr.toLowerCase();
				const elementIsUpperCase = !elementIsNumber && curr === curr.toUpperCase();

				if (elementIsNumber || elementIsLowerCase) acc.push(false);
				if (elementIsUpperCase) acc.push(true);
				return acc;
			}, [])
			.every((boolean) => boolean === false);

		const noLowerCaseLetter = [...password]
			.reduce((acc: boolean[], curr, _, array) => {
				const numbersArray = array.filter((element) => Number(element));
				const elementIsNumber = numbersArray.includes(curr);
				const elementIsLowerCase = !elementIsNumber && curr === curr.toLowerCase();
				const elementIsUpperCase = !elementIsNumber && curr === curr.toUpperCase();

				if (elementIsNumber || elementIsUpperCase) acc.push(false);
				if (elementIsLowerCase) acc.push(true);
				return acc;
			}, [])
			.every((boolean) => boolean === false);

		if (password.length < 8)
			return {
				valid: false,
				reasons: [PasswordErrors.Short],
			};
		if (noUpperCaseLetter)
			return {
				valid: false,
				reasons: [PasswordErrors.No_Upper_Case],
			};
		if (noLowerCaseLetter)
			return {
				valid: false,
				reasons: [PasswordErrors.No_Lower_Case],
			};
		return {
			valid: true,
			reasons: [],
		};
	}
}
