function twoSums(nums, target) {
	for (var i = 0; i < nums.length; i++) {
		for (var j = 0; j < nums.length; j++) {
			if (i !== j && nums[i] + nums[j] == target) {
				console.log(`[${i}, ${j}]`);
				return [i, j];
			}
		}
	}

	return null;
}

twoSums([2, 7, 11, 15], 9);
twoSums([3, 2, 4], 6);
twoSums([3, 3], 6);
