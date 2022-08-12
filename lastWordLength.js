function lastWordLength(str) {
	let words = str.split(" ");

	words = words.filter((i) => {
		return i != "";
	});

	return words[words.length - 1].length;
}

console.log(lastWordLength("Hello World"));
console.log(lastWordLength("   fly me   to   the moon  "));
console.log(lastWordLength("luffy is still joyboy"));
