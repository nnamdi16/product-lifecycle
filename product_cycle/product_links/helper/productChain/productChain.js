//Required node fs module.
const fs = require('fs');
const factory = require('/Users/nnamdinwabuokei/Documents/Decagon/Institute/checkpoint/product-lifecycle/product_cycle/product_links/helper/productChainFactory/productChainFactory.js');
// const MoveProduct = require('../moveProduct/moveProduct');
// console.log('The Factory',factory);
//Created a productChain class that instantiate a productChain during state change.
class ProductChain {
    constructor(state, product) {
        this.product = product; 
        this.state = state;
        // console.log('The Factory',factory);
        
       
        
        
        
    }

    //Method that ensures product flows from one state to the other.
    start() {
        // let moveProduct = new MoveProduct();
        // moveProduct.moveOutput(this.state,this.product);
        let currentState = factory.productChainFactory.getProductLink(this.state);
        console.log('Now',currentState);
        // currentState.move('Producer','Calista Na');
        // console.log(this.product);
        currentState.move(this.state,this.product);
        // return true;
        // console.log(this.currentState);
    }

}

// const productChain = new ProductChain();


module.exports = ProductChain;
const main = require('../../../main');

