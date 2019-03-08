const fs = require('fs');
const transfer = require('../../helper/moveProduct/moveProduct');
const observer = require('../../helper/observable/observable').observer;
class Recycler {
    constructor() {}

    move(state, prop) {
        if(observer.check === null) transfer.moveProduct.moveOutput(state, prop);
    }


}


module.exports = Recycler;