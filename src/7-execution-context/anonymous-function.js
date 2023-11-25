const myObject = {
  myMethod(items) {
    console.log(this);
    
    const callback = function () {
      console.log(this);
    };

    items.map(callback);
  }
};

myObject.myMethod([1, 2, 3]); 