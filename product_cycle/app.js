//Import fs, ProductChain class and observer object.
const fs = require('fs'); 
const ProductChain = require('./helper/productChain/productChain');
const observer = require('./helper/observable/observable').observer;

let counter = 0;
//Create an ExecuteOperation class
class ExecuteOperation {
	constructor() {}

	//Create an execute method to read the Input file
	execute(url) {
		let data = fs.readFileSync(url,
			'utf8');
		return data;
	}

	//removeImpunity method is used to clean the file from impunities
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

	//Create the assignState method that classifies the output into states and product
	assignState(url) {
		let output = this.execute(url);
		let product = this.removeImpunity(output);
		let productObj;
		for (let index = 0; index < product.length; index++) {
			let element = product[index].split(' ');
			let counter = index + 1;

			//Objects that classifies the file into states and product
			productObj = {
				state: `${element[2]}`,
				prop: `${counter} ${element[0]} ${element[1]}` 
			};
			let productChain = new ProductChain(productObj.state,productObj.prop);
			productChain.start();
		

		}
		observer.check = true; //A stopper that signals the recycler to end the operation.

	}
}


//Export ExecuteOperation Class
module.exports = ExecuteOperation;
const main = require('../product_cycle/main');

console.log('after calling readFile');