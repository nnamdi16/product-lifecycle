const fs = require('fs');
const ProductChain = require('../productChain');
const Retailer = require('../retailer/retailer');
const readFile = require('../../data/readData');
const Consumer = require('../consumer/consumer');
// const producerStation = require('../../data/producerStation');
// const producerMove = require('../../data/producerMove');
// const ProductState = require('../../util/productState');
class Producer {
    constructor(readFile) {
        this.readFile = readFile;
        
    }
    go() {
        let output = `Product moved from Producer to Retailer`;
        fs.appendFile('../data/output-file.txt','\n' + output,(err) => {
            if(err) throw err;
            console.log('Product processed from Producer!');
            return;
        });
        this.readFile.nextState(new Retailer(readFile));
        
    }
    // createChannel() {
    //     console.log('I am a producer');
    // }
}

// class ProductManager extends ProductChain {
//     constructor() {
//         super();
//         this.productState = new ProductState (); //Creating an Object type productState so as to access its methods
//         // console.log('this.productState: ', this.productState);
//     }
//     makeChannel() {
//         return new Producer();
//     }

//     receiveProduct(productName) {
//         if(producerStation.length > 0)
//         producerMove.push({'ProductName': productName});
//          else producerStation.push({
//             'ProductName': productName
//         });
        
//     }

//     sendProduct() {
//         let productSend =  this.productState.productMove();
//         return productSend;
//     }

//     changeOperation(){
//         this.productState.productMove();
        
//     }
    
// }



// const devProducer = new ProductManager('Calista Na');
// const damProduce = new ProductState('Classic');
// // // console.log('damProduce: ', damProduce);
// damProduce.productMove();
// // console.log('damProduce.productMove();: ', damProduce.productMove());
// damProduce.change();
// damProduce.productMove();
// // damProduce.change();
// // damProduce.change();
// console.log('damProduce.productMove();: ', damProduce.productMove());
// // console.log('devProducer: ', devProducer);

// // devProducer.createProductChannel();
// // devProducer.receiveProduct('Calista Na');

// // console.log('Producer Station',producerStation);
// // devProducer.sendProduct();
// // console.log('devProducer.moveProduct();: ', devProducer.sendProduct());

// // console.log('New Dev',devProducer);


// module.exports = ProductManager;
module.exports = Producer;
