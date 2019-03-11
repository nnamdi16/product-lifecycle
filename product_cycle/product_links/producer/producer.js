//Import an instance of MoveProduct class and the observer object
const transfer = require('../../helper/moveProduct/moveProduct');
const observer = require('../../helper/observable/observable').observer;

//Create  Producer class where products whose states are Consumers are been processed
class Producer {
    constructor() {}

    move(state,prop) {
        transfer.moveProduct.moveOutput(state,prop,observer.write);
        
    }

}

//Export Producer class
module.exports = Producer;
const main = require('../../main'); //Import classes in the main file