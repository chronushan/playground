function filterRange(arr, a, b) {
	return arr.filter((array) => array >= a && array <= b);
}
let arr = [5, 3, 8, 1];
console.log(filterRange(arr, 1, 4));
console.log(arr);
