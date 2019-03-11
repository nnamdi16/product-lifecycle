
const transfer = require('../../helper/moveProduct/moveProduct');
const observer = require('../../helper/observable/observable').observer;
class Producer {
    constructor() {}

    move(state,prop) {
        transfer.moveProduct.moveOutput(state,prop,observer.write);
        
    }


    // isLast(state,prop) {
    //     if (state === 'Producer' && prop === '18599 Rosetta Fagen') {
    //         // throw new Error('Product Cycle Completed ' + prop);
    //         return;
    //     }

    // }

}


module.exports = Producer;
const main = require('../../main');