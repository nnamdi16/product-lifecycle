const fs = require('fs');

class ProductChain {
    constructor(state, product) {
        this.product = product; 
        this.state = state;
        if (state === 'Producer') {
            this.currentState = new main.Producer();
        } else if (state === 'Retailer') {
            this.currentState = new main.Retailer();
        } else if(state === 'Consumer'){
            this.currentState = new main.Consumer();
        } else if(state === 'Retailer'){
            this.currentState = new main.Recycler();
        }else{

        }


    }

    start() {
        this.currentState.move(this.product);
        return true;
    }

}


module.exports = ProductChain;
const main = require('../main');
