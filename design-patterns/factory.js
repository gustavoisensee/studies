// factory function for creating objects
function createCar(make, model, year) {
  return {
    make: make,
    model: model,
    year: year,
    start: function () {
      console.log('Starting the ' + this.make + ' ' + this.model);
    },
    stop: function () {
      console.log('Stopping the ' + this.make + ' ' + this.model);
    }
  };
}

const executeFactory = () => {
  console.log('\n### Factory function #####');

  // Creating instances using the factory function
  const car1 = createCar('Toyota', 'Camry', 2021);

  console.log(car1)
};

module.exports = {
  executeFactory
}