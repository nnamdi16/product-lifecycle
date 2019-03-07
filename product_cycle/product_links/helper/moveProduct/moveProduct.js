const fs = require('fs');
const factory = require('../productChainFactory/productChainFactory');
class MoveProduct {
    constructor() {
        // this.prop = prop;
        // this.state = state;
    }

     async moveOutput(state,prop) {
        let result = factory.productChainFactory.getNextProductLink(super.productChainFactory,state);
        let output = `${prop} Product moved from ${state} to ${result[0]}`;
        // console.log(result[1]);
        console.log(output);
        // let nextState = factory.productChainFactory.getProductLink(result[1]);
        // console.log(nextState);
        fs.appendFile('/Users/nnamdinwabuokei/Documents/Decagon/Institute/checkpoint/product-lifecycle/product_cycle/data/output-file.txt', '\n' + output, (err) => {
            if (err) throw err;
            let nextState = factory.productChainFactory.getProductLink(result[0]);
            console.log(nextState);
            nextState.move(result[0],prop);
            // console.log(nextState);
            // nextState(result[1],prop);
            // result[0](state,prop);
            // console.log(output);

        });
    }
}
const moveProduct = new MoveProduct();
// moveProduct.moveOutput('Producer','Calista Na');
// console.log(moveProduct);
module.exports.moveProduct = moveProduct;
module.exports.MoveProduct = MoveProduct;
const main = require('../../../main');