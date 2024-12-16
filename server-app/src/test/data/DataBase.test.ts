import { DataBase } from '../../app/data/DataBase.ts';
import * as IdGenerator from '../../app/data/IdGenerator.ts';

type someTypeWithId = {
	id: string;
	name: string;
	color: string;
};

describe('Database test suite', () => {
	let systemUnderTest: DataBase<someTypeWithId>;
	const fakeID = '1234';

	beforeEach(() => {
		systemUnderTest = new DataBase<someTypeWithId>();
		jest.spyOn(IdGenerator, 'generateRandomId');
	});

	test('should return id after insert', () => {});
});
