import { type Config } from '@jest/types';

const rootDir = '<rootDir>/src/app';
const testDor = '<rootDir>/src/test/data';

const config: Config.InitialOptions = {
	preset: 'ts-jest',
	verbose: true,
	collectCoverage: true,
	collectCoverageFrom: [`${rootDir}/**/*.ts`],
	testMatch: [`${testDor}/**/*.ts`],
	testEnvironment: 'node',
	transform: {
		'^.+.tsx?$': ['ts-jest', {}],
	},
};

export default config;
