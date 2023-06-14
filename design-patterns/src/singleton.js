class Singleton {
  constructor() {
    if (!Singleton.instance) {
      // Initialize the singleton instance
      this.data = "Hello, I am a singleton!";
      Singleton.instance = this;
    }
    
    return Singleton.instance;
  }
  
  getData() {
    return this.data;
  }
}

const executeSingleton = () => {
  console.log('### Singleton ############')
  const instance1 = new Singleton();
  console.log(instance1.getData()); // Output: "Hello, I am a singleton!"
  
  const instance2 = new Singleton();
  console.log(instance2.getData()); // Output: "Hello, I am a singleton!"
  
  console.log(instance1 === instance2); // Output: true
}

module.exports = {
  executeSingleton
}
