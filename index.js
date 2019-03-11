
const ExecuteOperation = require('./product_cycle/app');
const ProductChain = require('./product_cycle/helper/productChain/productChain');
const observer = require('./product_cycle/helper/observable/observable').observer;


const executeOperation = new ExecuteOperation();
// const productChain = new ProductChain();
// executeOperation.execute(observer.read);
executeOperation.assignState(observer.read);
// productChain.start();
// console.log(output);

// let value = observer.read;
// console.log(value);