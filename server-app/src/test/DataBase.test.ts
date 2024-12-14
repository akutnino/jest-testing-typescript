import { DataBase } from '../app/data/DataBase.ts';

type someTypeWithId = {
	id: string;
	name: string;
	color: string;
};

describe('Database test suite', () => {
	let systemUnderTest: DataBase<someTypeWithId>;

	test('', () => {});
});
