export class PasswordChecker {
	public checkPassword(password: string): boolean {
		const noUpperCase = [...password]
			.map((char) => {
				const charIsNumber = isFinite(Number(char));
				if (charIsNumber) return false;

				const charIsAlphabet =
					(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) ||
					(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90);
				if (!charIsAlphabet) return false;

				const charToUpperCase = String.fromCharCode(char.charCodeAt(0)).toUpperCase();
				const charIsUpperCase = charToUpperCase === char;
				if (charIsUpperCase) return true;
				return false;
			})
			.every((bool) => bool === false);

		const noLowerCase = [...password]
			.map((char) => {
				const charIsNumber = isFinite(Number(char));
				if (charIsNumber) return false;

				const charIsAlphabet =
					(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) ||
					(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90);
				if (!charIsAlphabet) return false;

				const charToLowerCase = String.fromCharCode(char.charCodeAt(0)).toLowerCase();
				const charIsLowerCase = charToLowerCase === char;
				if (charIsLowerCase) return true;
				return false;
			})
			.every((bool) => bool === false);

		if (password.length < 8) return false;
		if (noUpperCase) return false;
		if (noLowerCase) return false;
		return true;
	}
}
