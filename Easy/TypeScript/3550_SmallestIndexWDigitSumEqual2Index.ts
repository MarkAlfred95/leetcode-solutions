function smallestIndex(nums: number[]): number {
    for (let i = 0; i < nums.length; i++) {
        let num = Math.abs(nums[i]);
        let digitSum = 0;

        while (num > 0) {
            digitSum += num % 10;
            num = Math.floor(num / 10);
        }

        if (digitSum === i) return i;
    }
    return -1;
}

// Time Complexity: O(n * d) (where d = number of digits per number)
// Space Complexity: O(1)
