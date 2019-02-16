const ProductChain = require('../productChain');
const Consumer = require('../consumer/consumer');
class Retailer extends ProductChain{
    constructor(productChain) {
        this.productChain = productChain;
    }
    go() {
        let output = 'Product moved from Retailer to Consumer';
        fs.writeFile('../data/output-file.txt',output,(err) => {
            if(err) throw err;
            console.log('Product processed from Retailer!');
        });
        productChain.nextState(new Consumer(productChain));
        
    }
}


// class RetailerManager extends ProductChain {
//     makeChannel () {
//         return new Retailer();
//     }
// }

// const devRetailer = new RetailerManager();
// devRetailer.createProductChannel();

module.exports = Retailer;