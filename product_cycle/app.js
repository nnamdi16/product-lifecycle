const fs = require('fs');
const ProductChain = require('./helper/productChain/productChain');
const observer = require('./helper/observable/observable').observer;
// console.log(observer.check);
let counter = 0;
class ExecuteOperation {
	constructor() {}
	execute(url) {
		let data = fs.readFileSync(url,
			'utf8');
		return data;
	}
	removeImpunity(data) {
		let inputFile = data.split("\n").map(file => {
			let result = file.replace(/[^\w\s]/gm, "").replace(/\s\s+/gm, " ").trim();
			return result;
		});

		for (let i = inputFile.length - 1; i >= 0; i--) {
			if (!/[^\s]/.test(inputFile[i])) {
				inputFile.splice(i, 1);
			}
		}

		for (let i = 0; i < inputFile.length; i++) {
			if (inputFile[i].split(" ").length === 2) {
				inputFile[i] = inputFile[i] + " Producer";
			}
		}

		return inputFile;

	}

	assignState(url) {
		let output = this.execute(url);
		let product = this.removeImpunity(output);
		let productObj;
		for (let index = 0; index < product.length; index++) {
			let element = product[index].split(' ');
			let counter = index + 1;
			productObj = {
				state: `${element[2]}`,
				prop: `${counter} ${element[0]} ${element[1]}`
			};
			let productChain = new ProductChain(productObj.state,productObj.prop);
			productChain.start();
			// return productObj;

		}
		observer.check = true;

	}
}

// const executeOperation = new ExecuteOperation();
// // // // let url = 'data/read';
// let url = '/Users/nnamdinwabuokei/Documents/Decagon/Institute/checkpoint/product-lifecycle/product_cycle/data/product-Input.txt';
// let data = executeOperation.execute(url);
// let output = executeOperation.removeImpunity(data);
// // console.log(executeOperation.assignState(url));
// console.log(output);
// // console.log(executeOperation.execute('./data/product-Input.txt')); 


module.exports = ExecuteOperation;
const main = require('../product_cycle/main');

console.log('after calling readFile');