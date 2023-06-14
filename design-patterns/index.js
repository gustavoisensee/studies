const { executeSingleton } = require('./singleton');
const { executePrototype } = require('./prototype');
const { executeFactory } = require('./factory');

// ### Singleton ############
executeSingleton();

// ### Prototype ############
executePrototype();

// ### Factory function #####
executeFactory();
