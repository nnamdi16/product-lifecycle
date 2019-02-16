const ProductManager = require ('./product_chain/producer/producer');
const ProductChain = require('./product_chain/productChain');
const producerStation = require('./data/producerStation');
const producerMove = require('./data/producerMove');


const devProducer = new ProductManager('Calista Na');
// console.log('devProducer: ', devProducer);

devProducer.createProductChannel();
devProducer.receiveProduct('Calista Na');
devProducer.receiveProduct('Jimmy Ra');
devProducer.receiveProduct('Jack Sa');

console.log('Resolved State', producerStation);
console.log('Pending State', producerMove);