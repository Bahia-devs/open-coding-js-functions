function Message(text) {
  this.text = text;
};

const helloMessage = new Message('Hello World!');

console.log(helloMessage.text);