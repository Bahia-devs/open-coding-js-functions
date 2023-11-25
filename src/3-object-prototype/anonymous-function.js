// Creating cat function
function MyCat(name) {
  this.catName = name;
}

// Adding function to prototype
MyCat.prototype.sayCatName = function() {
  console.log(this);
  console.log(this.catName);
};

// Instantiating cat
const cat = new MyCat('Mew');

// Should say cat's name
cat.sayCatName(); // => undefined