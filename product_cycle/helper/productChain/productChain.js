const factory = require('../productChainFactory/productChainFactory');
const observer = require('../observable/observable').observer;
//Created a productChain class that instantiate a productChain during state change.
class ProductChain {
    constructor(state, product) {
        this.product = product;
        this.state = state;

    }

    //Method that ensures product flows from one state to the other.
    start() {
        let currentState = factory.productChainFactory.getProductLink(this.state);
        currentState.move(this.state, this.product,observer.write);
    }
}



module.exports = ProductChain;
