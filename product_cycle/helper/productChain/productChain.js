const factory = require('../productChainFactory/productChainFactory');

//Created a productChain class that instantiate a productChain during state change.
class ProductChain {
    constructor() {
        // this.product = product;
        // this.state = state;

    }

    //Method that ensures product flows from one state to the other.
    start(state,prop) {
        let currentState = factory.productChainFactory.getProductLink(state);
        currentState.move(state, prop);
    }
}



module.exports = ProductChain;
