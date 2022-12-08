export const removeObjectWithId = <T extends { id: number | string }>(
	arr: T[],
	id: string | number
) => {
	const objWithIdIndex = arr.findIndex((obj: T) => obj['id'] === id);

	if (objWithIdIndex > -1) {
		arr.splice(objWithIdIndex, 1);
	}

	return arr;
};
