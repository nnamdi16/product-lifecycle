
const ExecuteOperation = require('./product_cycle/app');
const observer = require('./product_cycle/helper/observable/observable').observer;


const executeOperation = new ExecuteOperation();
// executeOperation.execute(observer.read);
executeOperation.execute();

