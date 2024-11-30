import { type Config } from '@jest/types';

const config: Config.InitialOptions = {
	preset: 'ts-jest',
	verbose: true,
	collectCoverage: true,
	collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
	testEnvironment: 'node',
	transform: {
		'^.+.tsx?$': ['ts-jest', {}],
	},
};

export default config;
