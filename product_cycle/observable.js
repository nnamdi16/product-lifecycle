const main = require('../product_cycle/main');
require('./app');
class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(subscriber) {
        this.observers.push(subscriber);
    }

    unsubscribe(subscriber) {
        this.observers = this.observers.filter(observer => 
            observer !== subscriber);
    }

    fire(data) {
       this.observers.forEach(subscriber => subscriber(data));
        
    }
}


module.exports = Observable;
