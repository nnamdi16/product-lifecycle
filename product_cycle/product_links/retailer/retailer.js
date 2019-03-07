const fs  = require('fs');
const transfer = require('../helper/moveProduct/moveProduct');
class Retailer  {
    constructor() {
        
        
        // const moveProduct = new MoveProduct();
        // moveProduct.moveOutput(state,prop,output,'Retailer');
    }

    move(state,prop) {
        
        let productMove = transfer.moveProduct.moveOutput(state,prop);
        console.log(productMove);
    }

    // async move(prop,state) {

    //     let output = `${prop} Product moved from ${state} to Consumer`;
    //     fs.appendFile('/Users/nnamdinwabuokei/Documents/Decagon/Institute/checkpoint/product-lifecycle/product_cycle/data/output-file.txt','\n' + output,(err) => {
    //         if(err) throw err;
    //        new main.Consumer().move(prop);
    //         console.log(`${prop} Product processed from Retailer to Consumer!`);
    //         return;
    //     });
    // }
}
// const retailer = new Retailer();
// console.log(retailer);

module.exports = Retailer;
const main = require('../../main');
