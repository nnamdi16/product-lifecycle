const fs = require('fs');
const transfer = require('../helper/moveProduct/moveProduct');
class Consumer  {
    constructor() {
        // super(state,prop);
        
        
        // const moveProduct = new MoveProduct();
        // moveProduct.moveOutput(state,prop,output,'Retailer');
    }

    move(state,prop) {
        let productMove = transfer.moveProduct.moveOutput(state,prop);
        // console.log(productMove);
    }

    
    // async move(prop,state) {
    //     let output = `${prop} Product moved from ${state} to Recycler`;
    //     fs.appendFile('/Users/nnamdinwabuokei/Documents/Decagon/Institute/checkpoint/product-lifecycle/product_cycle/data/output-file.txt','\n' + output,(err) => {
    //         if(err) throw err;
    //         new main.Recycler().move(prop);
    //         console.log(`${prop} Product processed from Consumer!`);
    //         return;
    //     });

        
    // }
    
}

module.exports = Consumer;
const main = require('../../main');
