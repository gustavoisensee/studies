class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Prototyping own class
Person.prototype.greet = function() {
  console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
};

// Prototyping String class - easy to share along the whole project
String.prototype.capitalize = function() {
  console.log(this.charAt(0).toUpperCase() + this.slice(1));
};


// Prototyping by create an object with .create to keep
// personObject props into __proto__
const personObject = {
  name: 'Gus',
  age: 35,
};
const dev = Object.create(personObject, {
  skills: { value: ['react'] }
});

const executePrototype = () => {
  const person1 = new Person('Gus', 34);
  person1.greet();
  person1.name.capitalize()

  console.log(dev.skills, dev.name, dev.__proto__.name);
}

module.exports = {
  executePrototype
};
