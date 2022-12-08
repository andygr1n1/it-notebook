export const removeObjectWithId = (arr, id) => {
    const objWithIdIndex = arr.findIndex((obj) => obj['id'] === id);
    if (objWithIdIndex > -1) {
        arr.splice(objWithIdIndex, 1);
    }
    return arr;
};
//# sourceMappingURL=removeObjectWithId.js.map