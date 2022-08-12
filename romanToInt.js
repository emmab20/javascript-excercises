function romanToInt(s) {
	// Map characters to digits
	let map = new Map();
	map.set("I", 1);
	map.set("V", 5);
	map.set("X", 10);
	map.set("L", 50);
	map.set("C", 100);
	map.set("D", 500);
	map.set("M", 1000);

	// Initialize sum to equal the last digit
	let sum = map.get(s[s.length - 1]);

	// Add or subtract digits.
	for (let i = s.length - 2; i >= 0; i--) {
		// add if current digit is larger than the digit on the right
		if (map.get(s[i]) >= map.get(s[i + 1])) sum += map.get(s[i]);
		// subtract if the current digit is smaller than the digit on the right.
		else sum -= map.get(s[i]);
	}
	return sum;
}

console.log(romanToInt("V"));
console.log(romanToInt("XXVII"));
console.log(romanToInt("IV"));
