function shuffle(array) {
	array.sort(function () {
		return Math.floor(Math.random() * 3 - 1);
	});
}
// function shuffle(array) {
// 	array.sort(() => Math.random() - 0.5);
// }
let arr = [1, 2, 3];
shuffle(arr);
console.log(arr);
shuffle(arr);
console.log(arr);
shuffle(arr);
console.log(arr);
