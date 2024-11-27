type stringInfo = {
	lowerCase: string;
	upperCase: string;
	characters: string[];
	length: number;
	extraInfo: object | undefined;
};

function getStringInfo(props: string): stringInfo {
	return {
		lowerCase: props.toLowerCase(),
		upperCase: props.toUpperCase(),
		characters: Array.from(props),
		length: props.length,
		extraInfo: {},
	};
}

function toUpperCase(props: string) {
	return props.toUpperCase();
}

export { toUpperCase, getStringInfo, stringInfo };
