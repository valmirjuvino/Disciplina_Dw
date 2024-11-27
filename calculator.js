function calculate(a, b, operator) {
    // Validate input
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Invalid input';
    }

    // Perform calculation based on operator
    switch(operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            // Handle division by zero
            if (b === 0) {
                return 'Cannot divide by zero';
            }
            return a / b;
        default:
            return 'Invalid operator';
    }
}

// Test cases
const testCases = [
    [1, 1, '+'],
    [1, 1, '-'],
    [1, 1, '*'],
    [1, 1, '/'],
    [10, 5, '+'],
    [10, 5, '-'],
    [10, 5, '*'],
    [10, 5, '/'],
    [0, 0, '+'],
    [100, 0, '*']
];

// Run and print test cases
testCases.forEach(([a, b, operator]) => {
    console.log(`${a}, ${b}, ${operator} ${calculate(a, b, operator)}`);
});
