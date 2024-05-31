function unique(arr) {
	let final = [];
	arr.forEach((element) => {
		if (!final.includes(element)) {
			final.push(element);
		}
	});
	return final;
}

let strings = [
	"Hare",
	"Krishna",
	"Hare",
	"Krishna",
	"Krishna",
	"Krishna",
	"Hare",
	"Hare",
	":-O",
];

console.log(unique(strings)); // Hare, Krishna, :-O
