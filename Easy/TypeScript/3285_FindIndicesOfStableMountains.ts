function stableMountains(height: number[], threshold: number): number[] {
    let arr = [];

    for (let i = 1; i < height.length; i++){
        if (height[i - 1] > threshold){
            arr.push(i)
        }
    }

    return arr;
};

// Time Complexity: O(n)
// Space Complexity: O(n)