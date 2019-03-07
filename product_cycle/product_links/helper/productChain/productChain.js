const factory = require('/Users/nnamdinwabuokei/Documents/Decagon/Institute/checkpoint/product-lifecycle/product_cycle/product_links/helper/productChainFactory/productChainFactory.js');

//Created a productChain class that instantiate a productChain during state change.
class ProductChain {
    constructor(state, product) {
        this.product = product;
        this.state = state;

    }

    //Method that ensures product flows from one state to the other.
    start() {
        let currentState = factory.productChainFactory.getProductLink(this.state);
        currentState.move(this.state, this.product);
    }
}



module.exports = ProductChain;
