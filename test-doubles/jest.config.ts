import { type Config } from '@jest/types';

const baseDir = '<rootDir>/src/app';
const testDir = '<rootDir>/src/test';

const config: Config.InitialOptions = {
	preset: 'ts-jest',
	verbose: true,
	collectCoverage: true,
	collectCoverageFrom: [`${baseDir}/**/*.ts`],
	testMatch: [`${testDir}/**/*.ts`],
	testEnvironment: 'node',
	transform: {
		'^.+.tsx?$': ['ts-jest', {}],
	},
};

export default config;
