//Import an instance of MoveProduct class and the observer object
const transfer = require('../../helper/moveProduct/moveProduct');
const observer = require('../../helper/observable/observable').observer;

//Create a Consumer class where products whose states are Consumers are been processed
class Consumer  {
    constructor() {}

    move(state,prop) {
         transfer.moveProduct.moveOutput(state,prop,observer.write);   
    }
}

module.exports = Consumer;

