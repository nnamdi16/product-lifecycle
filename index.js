
const ExecuteOperation = require('./product_cycle/app');
const ProductChain = require('./product_cycle/helper/productChain/productChain');
const observer = require('./product_cycle/helper/observable/observable').observer;


const executeOperation = new ExecuteOperation();
const productChain = new ProductChain();
// executeOperation.execute(observer.read);
let output = executeOperation.run(observer.read);
console.log(output);

// let value = observer.read;
// console.log(value);