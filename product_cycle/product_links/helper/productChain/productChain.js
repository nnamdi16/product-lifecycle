//Required node fs module.
const fs = require('fs');


//Created a productChain class that instantiate a productChain during state change.
class ProductChain {
    constructor(state, product) {
        this.product = product; 
        this.state = state;

        //Instantiated the productChain Factory that generates objects depending on the state change category.
        const observable = new main.Observable();
        const productChainFactory = new main.ProductChainFactory();
        const producer = new main.Producer();
       
        let observer = observable.subscribe(producer.isLast);
        // console.log(p);
       


        //Register the various state class category.
        productChainFactory.register('Producer',main.Producer);
        productChainFactory.register('Retailer',main.Retailer);
        productChainFactory.register('Consumer',main.Consumer);
        productChainFactory.register('Recycler',main.Recycler);

        observable.fire(this.state,this.product);
        
        this.currentState = productChainFactory.getProductLink(state);
        
    }

    //Method that ensures product flows from one state to the other.
    start() {
        this.currentState.move(this.product);
        return true;
    }

}

// const productChain = new ProductChain();
// console.log(productChain);


module.exports = ProductChain;
const main = require('../../../main');
