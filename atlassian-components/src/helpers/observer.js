class Observer {
  constructor() {
    this.observers = [];
  }

  subscribe(func) {
    this.observers?.push?.(func);
  }

  unsubscribe(func) {
    this.observers = this.observers?.filter?.(o => o !== func) || [];
  }

  notify(...args) {
    this.observers?.forEach?.(func => {
      func(...args);
    })
  }
};

export const usersObserver = new Observer();