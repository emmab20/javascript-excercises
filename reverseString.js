function reverseString(string) {
	let result = [];
	for (let i = 1; i <= string.length; i++) {
		result[i] = string[string.length - i];
	}
	return result;
}

let str = reverseString("Hello World");
console.log(str);
