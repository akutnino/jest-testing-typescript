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
