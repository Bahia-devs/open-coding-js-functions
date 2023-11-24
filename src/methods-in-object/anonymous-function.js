// USING ANONYMOUS FUNCTION
const calculate = {
  array: [1, 2, 3],
  sum: function() {
    console.log("this inside function =", this);
    return this.array.reduce((result, item) => result + item);
  }
};

console.log("this =", this);

const result = calculate.sum();

console.log(result);