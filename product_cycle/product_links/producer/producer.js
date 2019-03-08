const fs = require('fs');
const transfer = require('../../helper/moveProduct/moveProduct');
// const observer = require('product_cycle/data/output-file.txt')
class Producer {
    constructor() {}

    move(state,prop) {
        transfer.moveProduct.moveOutput(state,prop);
        
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