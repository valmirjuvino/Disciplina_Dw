function classifyTriangle(a, b, c) {
    // Check for invalid inputs (non-positive or negative numbers)
    if (a <= 0 || b <= 0 || c <= 0) {
        return 'none';
    }

    // Check triangle inequality theorem 
    // Sum of any two sides must be greater than the third side
    if (
        a + b <= c ||
        a + c <= b ||
        b + c <= a
    ) {
        return 'none';
    }

    // Classify the triangle based on side lengths
    if (a === b && b === c) {
        return 'equilateral';
    }

    if (a === b || b === c || a === c) {
        return 'isosceles';
    }

    return 'scalene';
}

// Test cases
const testCases = [
    [2, 2, 2],     // equilateral
    [10, 10, 10],  // equilateral
    [3, 4, 4],     // isosceles
    [4, 3, 4],     // isosceles
    [4, 4, 3],     // isosceles
    [10, 10, 2],   // isosceles
    [3, 4, 5],     // scalene
    [10, 11, 12],  // scalene
    [5, 4, 2],     // scalene
    [0, 0, 0],     // none
    [3, 4, -5],    // none
    [1, 1, 3],     // none
    [2, 4, 2]      // none
];

// Run and print test cases
testCases.forEach(([a, b, c]) => {
    console.log(`${a}, ${b}, ${c} ${classifyTriangle(a, b, c)}`);
});
