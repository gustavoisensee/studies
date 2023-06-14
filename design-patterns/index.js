const Singleton = require('./singleton');
const { executePrototype } = require('./prototype');

// ### Singleton ########################################################
const instance1 = new Singleton();
console.log(instance1.getData()); // Output: "Hello, I am a singleton!"

const instance2 = new Singleton();
console.log(instance2.getData()); // Output: "Hello, I am a singleton!"

console.log(instance1 === instance2); // Output: true


// ### Prototype ########################################################
executePrototype();
