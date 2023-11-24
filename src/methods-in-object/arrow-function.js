// USING ARROW FUNCTION
const calculate = {
  array: [1, 2, 3],
  sum: () => {
    console.log("this inside function =", this);
    return this.array.reduce((result, item) => result + item);
  }
};

console.log("this =", this);

// Throws "TypeError: Cannot read property 'reduce' of undefined"
calculate.sum();
