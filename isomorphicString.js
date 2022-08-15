/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
	// Create s to t mapping
	let stMap = new Map();
	// Create t to s mapping
	let tsMap = new Map();
	// Loop through string
	for (let i = 0; i < s.length; i++) {
		let sChar = s[i];
		let tChar = t[i];

		// Check both mappings if there is a mapping that exists
		if (stMap[sChar] == null && tsMap[tChar] == null) {
			// Add mapping to both maps if it doesn't exist.
			stMap[sChar] = tChar;
			tsMap[tChar] = sChar;
		} else if (!(stMap[sChar] == tChar && tsMap[tChar] == sChar)) {
			// Quit if a mapping already exists
			return false;
		}
	}

	return true;
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
