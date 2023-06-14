const { executeSingleton } = require('./singleton');
const { executePrototype } = require('./prototype');
const { executeFactory } = require('./factory');
const { executeFacade } = require('./facade');

// ### Singleton ############
executeSingleton();

// ### Prototype ############
executePrototype();

// ### Factory ##############
executeFactory();

// ### Facade ###############
executeFacade();
