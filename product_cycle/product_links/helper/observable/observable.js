const main = require('../../../main');
require('../../../app');
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

    fire(state,data) {
       this.observers.forEach(subscriber=> subscriber(state,data));
        
    }
}


module.exports = Observable;

// class Producer {
//     constructor() {

//     }

//     isLast() {
//         if (prop === '18599 Rosetta Fagen') {
//             throw new Error('Product Cycle Completed ' + prop);

//         }
//     }
// }

// const observable = new Observable();
// const producer = new main.Producer();
// let p = observable.subscribe(producer.isLast);
// console.log(p);
// observable.fire('18599 Rosetta Fagen');