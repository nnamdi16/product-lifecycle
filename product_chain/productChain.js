const fs = require('fs');
let lyrics = 'I am reading a sed der fa';
const Producer = require('./producer/producer');
const Retailer = require('./retailer/retailer');
const Consumer = require('./consumer/consumer');
const Recycler = require('./recycler/recycler');


// fs.writeFile('../data/output-file.txt',lyrics,(err) => {
//     if(err) throw err;
//     console.log('Lyrics Saved!');
// });
class ProductChain {
    constructor(product,state) {
        this.product = product;
        this.currentState = state === 'Producer' ? new Producer(this) : (state === 'Retailer' ? new Retailer(this):(state === 'Consumer' ? new Consumer(this): new Recycler(this))); 

    }
    nextState(state) {
        this.currentState = state;
        this.currentState.go(this.product);
        return true;
    }
    start() {
        this.currentState.go(this.product);
        return true;
    }
    // createProductChannel(){
    //         const productChannel = this.makeChannel();
    //         productChannel.createChannel();
    // }

    // moveProduct () {
    //     return this.product;
    // }


}
// const productChain = new ProductChain('Calista Na');
// console.log(productChain);
// module.exports = ProductManager;
module.exports = ProductChain;