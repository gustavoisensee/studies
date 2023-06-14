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

module.exports = Singleton;
