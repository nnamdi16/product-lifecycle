//Import an instance of MoveProduct class and the observer object
const transfer = require('../../helper/moveProduct/moveProduct');
const observer = require('../../helper/observable/observable').observer;

//Create  Recycler class where products whose states are Consumers are been processed
class Recycler {
    constructor() {}

    move(state, prop) {
        if(observer.check === null) transfer.moveProduct.moveOutput(state, prop,observer.write);
    }


}

//Export Recycler class
module.exports = Recycler;