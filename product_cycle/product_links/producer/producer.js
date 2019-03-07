const fs = require('fs');
const transfer = require('/Users/nnamdinwabuokei/Documents/Decagon/Institute/checkpoint/product-lifecycle/product_cycle/product_links/helper/moveProduct/moveProduct.js');

class Producer {
    constructor() {
        // super(state,prop);
        
        // super(state,prop);
        
        
        // const moveProduct = new MoveProduct();
        // moveProduct.moveOutput(state,prop,output,'Retailer');
    }

    move(state,prop) {
        // let moveProduct = new MoveProduct();
        let productMove = transfer.moveProduct.moveOutput(state,prop);
        console.log(productMove);
    }

    
    // async move(prop,state) {

    //     let output = `${prop} Product moved from ${state} to Retailer`;
    //     fs.appendFile('/Users/nnamdinwabuokei/Documents/Decagon/Institute/checkpoint/product-lifecycle/product_cycle/data/output-file.txt', '\n' + output, (err) => {
    //         if (err) throw err;
    //         new main.Retailer().move(prop);
    //         // this.isLast(prop);
    //         // console.log(sample);
    //         console.log(`${prop} Product processed from Producer!`);
    //         return;
    //     });
    // }


    isLast(state,prop) {
        // console.log('The Prop', prop);
        if (state === 'Producer' && prop === '18599 Rosetta Fagen') {
            // throw new Error('Product Cycle Completed ' + prop);
            return;
        }
        // else{
        //     console.log('Run');
        // }
    }

}

// const producer = new Producer();
// console.log(producer.move('Producer','Lucas Mocha'));

module.exports = Producer;
const main = require('../../main');