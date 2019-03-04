// const ExecuteOperation = require('./product_cycle/app');
// const Observable = require('./product_cycle/observable');
const main = require('./product_cycle/main');
// // const observable = new Observable();
// const producer = new main.Producer();
// let observer = observable.subscribe(producer.isLast);
// observable.fire('3 Owen Bartkowski');
// console.log(observable);

const executeOperation = new main.ExecuteOperation();
executeOperation.execute();

