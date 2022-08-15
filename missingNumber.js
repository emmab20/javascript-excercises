function missingNumber(nums) {
	let sortedNums = nums.sort();

	// Iterate through nums
	for (let i = 0; i <= sortedNums.length; i++) {
		if (sortedNums[i] !== i) return i;
	}
}

console.log(`${missingNumber([3, 0, 1])} does not exist in range`);
console.log(`${missingNumber([0, 1])} does not exist in range`);
console.log(
	`${missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])} does not exist in range`
);
