const myObject = {
  myMethod(items) {
    console.log(this);
    
    function callback() {
      console.log(this);
    };

    items.map(callback);
  }
};

myObject.myMethod([1, 2, 3]); 