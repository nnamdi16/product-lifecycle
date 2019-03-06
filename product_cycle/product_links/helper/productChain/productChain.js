//Required node fs module.
const fs = require('fs');
const factory = require('../../helper/productChainFactory/productChainFactory');

//Created a productChain class that instantiate a productChain during state change.
class ProductChain {
    constructor(state, product) {
        this.product = product; 
        this.state = state;

        this.currentState = factory.productChainFactory.getProductLink(state);
        
    }

    //Method that ensures product flows from one state to the other.
    start() {
        this.currentState.move(this.product);
        return true;
    }

}



module.exports = ProductChain;

