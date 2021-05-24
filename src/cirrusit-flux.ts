// Anything exported from this file is importable by other in-browser modules.
export function publicApiFunction() {}

class Dispatcher {
    listeners = [];
    constructor() {
      this.listeners = [];
    }
  
    dispatch(message) {
      console.log("dispatch");
      this.listeners.forEach(listener => listener(message));
    }
  
    register(listener) {
      this.listeners.push(listener);
    }
  }
  
export const dispatcher = new Dispatcher();

function selectName(name) {
  store.selectedName = name;
}

  class Store {
    listeners = [];
    selectedName = '';
    constructor() {
        console.log("Store created");
      this.listeners = [];
      console.log('REGISTRANDO AL DISPATCHER');
      // 1) store registers with dispatcher
  dispatcher.register(message => {
        switch (message.type) {
          // 3) message is sent by dispatcher ( that originated from the first view)
          case 'SEND_NAME':
            selectName(message.data);
            // 4) listener, a view, is being notified of the change
            store.emitChange();
            break;
          }
      }); 
    }
  
    // 2) listener is added by a view
    addListener(listener) {
      console.log("A listener was added");
      if (!this.listeners["change"]) {
        this.listeners["change"] = [];
      }
  
      this.listeners["change"].push(listener);
    }
  
    emitChange() {
      if (this.listeners["change"]) {
        this.listeners["change"].forEach(cb => cb());
      }
    }
  
    getSelectedItem() {
      return this.selectedName;
    }
  }
  
  export const store = new Store();