//Import ExecuteOperation class and observer object.
const ExecuteOperation = require('./product_cycle/app');
const observer = require('./product_cycle/helper/observable/observable').observer;


const executeOperation = new ExecuteOperation();

executeOperation.assignState(observer.read);
