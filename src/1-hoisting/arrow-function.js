console.log(brag(3)) // TypeError: brag is not a function

const brag = (count)=> {
  return("I can do " + count + " pushups");
}

console.log(brag(3)) // I can do 3 pushups