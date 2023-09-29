const fibonacci = function(n) {
    if (n == 1 || n == 0) return parseInt(n);

    else if (n < 0) return "OOPS"

    // Initial values for the sequence
    let fibSequence = [0, 1];

    // Calculate and store each Fibonacci number up to n
    for(let i = 2; i <= n; i++) {
        fibSequence[i] = fibSequence[i-1] + fibSequence[i-2];
    }

    // Return the nth Fibonacci number
    return parseInt(fibSequence[n]);
};

// Do not edit below this line
module.exports = fibonacci;
