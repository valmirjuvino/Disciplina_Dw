function sum(a, b) {
    return a + b;
}

// Test cases
const testCases = [
    [1, 233],
    [1, 25],
    [5, 10],
    [0, 0],
    [-5, 5],
    [100, 200]
];

// Run and print test cases
testCases.forEach(([a, b]) => {
    console.log(`${a}, ${b} = ${sum(a, b)}`);
});
