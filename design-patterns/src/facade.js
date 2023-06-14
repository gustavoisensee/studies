class Engine {
  start() {
    console.log('Engine started');
  };

  stop() {
    console.log('Engine stopped');
  };
}

class Lights {
  turnOn() {
    console.log('Lights turned on');
  };

  turnOff() {
    console.log('Lights turned off');
  };
}

class CarFacade {
  engine = new Engine();
  lights = new Lights();

  startCar() {
    this.lights.turnOn();
    this.engine.start();
  };

  stopCar() {
    this.lights.turnOff();
    this.engine.stop();
  };
}

const executeFacade = () => {
  console.log('\n### Facade ###############')
  const car = new CarFacade();
  car.startCar(); // Output: 'Lights turned on' and 'Engine started'
  car.stopCar(); // Output: 'Engine stopped' and 'Lights turned off'
}

module.exports = {
  executeFacade
}
