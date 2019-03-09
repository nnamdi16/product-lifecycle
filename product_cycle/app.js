const fs = require('fs');
const ProductChain = require('./helper/productChain/productChain');
const observer = require('./helper/observable/observable').observer;
// console.log(observer.check);

class ExecuteOperation {
	constructor() {}
	execute(url) {
		const data = fs.readFileSync(url,
			'utf8');
		return data;	
		
	}

	run(url) {
		let product = this.execute(url);
		let array = product.toString().split('\n');
		let output = this.removeImpunity(array);
		return output;
		

	}
	removeImpunity(array) {
		let counter = 0,assignProduct;
		for (let index = 0; index < array.length; index++) {
			let output;
			let result = array[index].replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/\t+\r?\n|\r]/gm, ' ').replace(/ +/gm, ' ');
			if (!result.match(/^\s*$/gm)) {

				output = result.trim().split(' ');
				counter++;
				 assignProduct = this.assignState(output, counter);
				
				// console.log(assignProduct);
			}

		}
		return assignProduct;
		
	}

	assignState(product, counter) {
		let prop = `${counter} ${product[0]} ${product[1]}`;
		let state = `${product[2]}`;
		if (product.length === 3) {
			state = `${product[2]}`;
			prop = `${counter} ${product[0]} ${product[1]}`;
			return [state, prop];
			// const productChain = new ProductChain(state, prop);
			// productChain.start();
		} else {
			state = 'Producer';
			prop = `${counter} ${product[0]} ${product[1]}`;
			return [state, prop];
			// const productChain = new ProductChain('Producer', prop);
			// productChain.start();
		}
	}
	// execute(array) {
	// 	for (let index = 0; index < array.length; index++) {


	// 	}

	// 	
	// }
	// execute(url) {
	// 	try {
	// 		const data = fs.readFileSync(url,
	// 			'utf8'
	// 		);
	// 		let array = data.toString().split('\n');
	// 		let count = 0;
	// 		for (let index = 0; index < array.length; index++) {
	// 			let result = array[index]
	// 				.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/\t+\r?\n|\r]/gm, ' ')
	// 				.replace(/ +/gm, ' ');
	// 			if (!result.match(/^\s*$/gm)) {
	// 				let product = result.trim().split(' ');
	// 				count++;
	// 				let prop = `${count} ${product[0]} ${product[1]}`;
	// 				let state = `${product[2]}`;
	// 				if (product.length === 3) {
	// 					const productChain = new ProductChain(state, prop);
	// 					productChain.start();
	// 				} else {
	// 					const productChain = new ProductChain('Producer', prop);
	// 					productChain.start();
	// 				}
	// 			}

	// 		}
	// 		observer.check = true;

	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// }

}
// const executeOperation = new ExecuteOperation();
// let url = 'data/read';
// // let output = executeOperation.removeImpunity(['///\tBack Right']);
// let output = executeOperation.run(url);
// console.log(output);
// console.log(executeOperation.execute('./data/product-Input.txt')); 


module.exports = ExecuteOperation;
const main = require('../product_cycle/main');

console.log('after calling readFile');