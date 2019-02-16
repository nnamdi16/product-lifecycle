const ProductManager = require ('./product_chain/producer/producer');
const ProductChain = require('./product_chain/productChain');
const producerStation = require('./data/producerStation');


const devProducer = new ProductManager('Calista Na');
// console.log('devProducer: ', devProducer);

devProducer.createProductChannel();
devProducer.receiveProduct('Calista Na');

console.log('Producer Station',producerStation);