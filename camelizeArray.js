function camelize(str) {
	let strSplit = str.split("-");
	console.log(strSplit);
	let camelStr = [];
	for (string of strSplit) {
		if (strSplit.indexOf(string) == 0) {
			camelStr.push(string);
		} else {
			let capital = string.charAt(0).toUpperCase();
			let capitalize = capital + string.slice(1);
			camelStr.push(capitalize);
		}
	}
	camelStr = camelStr.join("");
	return camelStr;
}
console.log(camelize("hello-mister-world"));
