function filterRangeInPlace(arr, a, b) {
	arr.splice(arr.indexOf(a), 1);
	arr.splice(arr.indexOf(b), 1);

	return arr;
}
let array = [5, 3, 8, 1, 5, 2, 3, 4, 2];

console.log(filterRangeInPlace(array, 1, 4));
