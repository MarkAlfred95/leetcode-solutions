function buildArray(nums: number[]): number[] {
    let arr = [];

    for (let i = 0; i < nums.length; i++){
        arr.push(nums[nums[i]]);
    }

    return arr;
};

// Time Complexity: O(n)
// Space Complexity: O(n)