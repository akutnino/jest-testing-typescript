import { DataBase } from '../../app/data/DataBase.ts';
import * as IdGenerator from '../../app/data/IdGenerator.ts';

type someTypeWithId = {
	id: string;
	name: string;
	color: string;
};

describe.only('Database test suite', () => {
	let systemUnderTest: DataBase<someTypeWithId>;

	const fakeID = '1234';

	const dummyObject1: someTypeWithId = {
		id: '',
		name: 'someName',
		color: 'blue',
	};

	const dummyObject2: someTypeWithId = {
		id: '',
		name: 'someOtherName',
		color: 'blue',
	};

	beforeEach(() => {
		systemUnderTest = new DataBase<someTypeWithId>();
		jest.spyOn(IdGenerator, 'generateRandomId').mockReturnValue(fakeID);
	});

	test('should return id after insert', async () => {
		const actualResult = await systemUnderTest.insert({
			id: '',
		} as any);

		expect(actualResult).toBe(fakeID);
	});

	test('should return element after insert', async () => {
		const id = await systemUnderTest.insert(dummyObject1);
		const actualResult = await systemUnderTest.getBy('id', id);

		expect(actualResult).toEqual(dummyObject1);
	});

	test('should find all elements with the same property', async () => {
		await systemUnderTest.insert(dummyObject1);
		await systemUnderTest.insert(dummyObject2);

		const expectedArray = [dummyObject1, dummyObject2];
		const actualResult = await systemUnderTest.findAllBy('color', 'blue');

		expect(actualResult).toEqual(expectedArray);
	});

	test('should update the color property value on object', async () => {
		const expectedColor = 'red';

		const id = await systemUnderTest.insert(dummyObject1);
		await systemUnderTest.update(id, 'color', expectedColor);
		const actualResult = await systemUnderTest.getBy('color', expectedColor);

		expect(actualResult?.color).toBe(expectedColor);
	});

	test('should delete object', async () => {
		const id = await systemUnderTest.insert(dummyObject1);
		await systemUnderTest.delete(id);
		const actualResult = await systemUnderTest.getBy('id', id);

		expect(actualResult).toBeUndefined();
	});

	test('should get all elements', async () => {
		await systemUnderTest.insert(dummyObject1);
		await systemUnderTest.insert(dummyObject2);

		const expectedArray = [dummyObject1, dummyObject2];
		const actualResult = await systemUnderTest.getAllElements();

		expect(actualResult).toEqual(expectedArray);
	});
});
