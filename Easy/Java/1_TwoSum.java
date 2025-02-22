class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> numIndexMap = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];

            if (numIndexMap.containsKey(complement)) {
                return new int[] {numIndexMap.get(complement), i};
            }
            numIndexMap.put(nums[i], i);
        }
        throw new IllegalArgumentException("No solution found");
    }
}

// Time Complexity: O(n)
// Space Complexity: O(n)