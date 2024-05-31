function copySorted(arr) {
	return arr.slice(0).sort((a, b) => (a > b ? 1 : -1));
}

let arr = ["HTML", "JavaScript", "CSS"];

console.log(copySorted(arr));
console.log(arr);
