const fs = require('fs');

class ProductChain {
    constructor(state, product) {
        this.product = product; 
        this.state = state;
        if (state === 'Producer') {
            this.currentState = new main.Producer(this);
        } else if (state === 'Retailer') {
            this.currentState = new main.Retailer(this);
        } else if(state === 'Consumer'){
            this.currentState = new main.Consumer(this);
        } else {
            this.currentState = new main.Recycler(this);
        }

        // } else{
        //     this.currentState = new Recycler(this);
        // }
        // this.currentState = state === 'Producer' ? new Producer(this) : (state === 'Retailer' ? 
        // new Retailer(this) : new Consumer(this) );
    }
    nextState(state) {
        this.currentState = state;
        this.currentState.move(this.product);
        return true;
    }
    start() {
        this.currentState.move(this.product);
        // console.log(this.product);
        return true;
    }

}


module.exports = ProductChain;
const main = require('../main');
