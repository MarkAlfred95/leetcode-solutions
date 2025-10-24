function transformArray(nums: number[]): number[] {
    let arr = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            arr.unshift(0);
        } else {
            arr.push(1);
        }
    }

    return arr;
};

// Time Complexity: O(n)
// Space Complexity: O(n)