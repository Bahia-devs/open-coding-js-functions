function multiply(a, b) {
  if (b === undefined) {
    return function(b) {
      return a * b;
    }
  }

  return a * b;
}

const double = multiply(2);

console.log(double(3));      // => 6

console.log(multiply(2, 3)); // => 6