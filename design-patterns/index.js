const { executeSingleton } = require('./src/singleton');
const { executePrototype } = require('./src/prototype');
const { executeFactory } = require('./src/factory');
const { executeFacade } = require('./src/facade');
const { executeProxy } = require('./src/proxy');

// ### Singleton ############
executeSingleton();

// ### Prototype ############
executePrototype();

// ### Factory ##############
executeFactory();

// ### Facade ###############
executeFacade();

// ### Proxy ################
executeProxy();