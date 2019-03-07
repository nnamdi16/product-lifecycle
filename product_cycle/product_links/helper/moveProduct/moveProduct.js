const fs = require('fs');
const factory = require('../productChainFactory/productChainFactory');
class MoveProduct {
    constructor() {}

    async moveOutput(state, prop) {
        let result = factory.productChainFactory.getNextProductLink(super.productChainFactory, state);
        let output = `${prop} Product moved from ${state} to ${result[0]}`;

        console.log(output);

    fs.appendFile('/Users/nnamdinwabuokei/Documents/Decagon/Institute/checkpoint/product-lifecycle/product_cycle/data/output-file.txt', '\n' + output, (err) => {
            if (err) throw err;
            let nextState = factory.productChainFactory.getProductLink(result[0]);
            nextState.move(result[0], prop);

        });
    }
}
const moveProduct = new MoveProduct();

module.exports.moveProduct = moveProduct;
module.exports.MoveProduct = MoveProduct;