import { v4 } from 'uuid';

export type stringInfo = {
	lowerCase: string;
	upperCase: string;
	characters: string[];
	length: number;
	extraInfo: Object | undefined;
};

// STUB function example:
export function calculateComplexity(props: stringInfo) {
	if (typeof props.extraInfo === 'object') {
		return Object.keys(props.extraInfo).length * props.length;
	}
}

// FAKES function example:
export function toUpperCaseWithCB(arg: string, callback: (arg: string) => void) {
	if (!arg) {
		callback('Invalid Argument');
		return;
	}
	callback(`Called function with arg/s: ${arg}`);
	return arg.toUpperCase();
}

// SPIES function example:
export class OtherStringUtils {
	// private callExternalService() {
	// 	console.log('Calling external service!!!');
	// }

	public toUpperCase(arg: string) {
		return arg.toUpperCase();
	}

	public logString(arg: string) {
		console.log(arg);
	}
}

// Mocking Modules
export function toUpperCase(args: string) {
	return args.toUpperCase();
}

export function toLowerCaseWithID(args: string) {
	// return args.toLowerCase() + crypto.randomUUID(); LOCAL WAY

	// Package way
	return args.toLowerCase() + v4();
}
