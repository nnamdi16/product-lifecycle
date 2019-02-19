const fs = require('fs');

const Producer = require('./producer/producer');
const Retailer = require('./retailer/retailer');
const Consumer = require('./consumer/consumer');
const Recycler = require('./recycler/recycler');


// fs.writeFile('../data/output-file.txt',lyrics,(err) => {
//     if(err) throw err;
//     console.log('Lyrics Saved!');
// });
class ProductChain {
    constructor(product, state) {
        this.product = product;
        this.state = state;
        if (state === 'Producer') {
            this.currentState = new Producer(this);
        } else if (state === 'Retailer') {
            this.currentState = new Retailer(this);
        } else if(state === 'Consumer'){
            this.currentState = new Consumer(this);
        } else {
            this.currentState = new Recycler(this);
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