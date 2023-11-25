const multiply = (a, b) => b === undefined ? b => a * b : a * b;

const double = multiply(2);

console.log(double(3));      // => 6

console.log(multiply(2, 3)); // => 6