import { type Config } from '@jest/types';

const baseDir = '<rootDir>/src/app';
const baseTestDir = '<rootDir>/src/test';

const config: Config.InitialOptions = {
	preset: 'ts-jest',
	verbose: true,
	collectCoverage: true,
	collectCoverageFrom: [`${baseDir}/**/*.ts`],
	testMatch: [`${baseTestDir}/**/*.ts`],
	testEnvironment: 'node',
	transform: {
		'^.+.tsx?$': ['ts-jest', {}],
	},
};

export default config;
