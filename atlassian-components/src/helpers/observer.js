class Observer {
  constructor() {
    this.observers = [];
  }

  subscribe(func) {
    if (!this.observers?.includes?.(func)) {
      this.observers?.push?.(func);
    }
  }

  unsubscribe(func) {
    this.observers = this.observers?.filter?.((o) => o !== func) || [];
  }

  notify(...args) {
    this.observers?.forEach?.((func) => {
      func(...args);
    });
  }
}

export const usersObserver = new Observer();
export const updateUsers = (...args) => usersObserver.notify(...args);

export const userModalObserver = new Observer();
export const openUserModal = (id) => userModalObserver.notify(id);

export const userDeleteModal = new Observer();
export const openUserDeleteModal = (id) => userDeleteModal.notify(id);
