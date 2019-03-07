const fs = require('fs');
const transfer = require('/Users/nnamdinwabuokei/Documents/Decagon/Institute/checkpoint/product-lifecycle/product_cycle/product_links/helper/moveProduct/moveProduct.js');

class Producer {
    constructor() {}

    move(state,prop) {
        transfer.moveProduct.moveOutput(state,prop);
        
    }


    isLast(state,prop) {
        if (state === 'Producer' && prop === '18599 Rosetta Fagen') {
            // throw new Error('Product Cycle Completed ' + prop);
            return;
        }

    }

}


module.exports = Producer;
const main = require('../../main');