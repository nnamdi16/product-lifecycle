const fs = require('fs');
const ProductChain = require('../product_cycle/product_links/helper/productChain/productChain');
class ExecuteOperation {
	constructor() {}
	execute() {
		try {
			const data = fs.readFileSync(
				'/Users/nnamdinwabuokei/Documents/Decagon/Institute/checkpoint/product-lifecycle/product_cycle/data/product-Input.txt',
				'utf8'
			);
            let array = data.toString().split('\n');
            let count = 0;
			for (let index = 0; index < array.length; index++) {
				let result = array[index]
					.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/\t+\r?\n|\r]/gm, ' ')
                    .replace(/ +/gm, ' ');
				if (!result.match(/^\s*$/gm)) {
					let product = result.trim().split(' ');
					count++;
					let prop = `${count} ${product[0]} ${product[1]}`;
					let state = `${product[2]}`;
					if (product.length === 3) {
						const productChain = new ProductChain(state, prop);
						productChain.start();
					} else {
						const productChain = new ProductChain('Producer', prop);
						productChain.start();
					}
				}

			}
			
		} catch (err) {
			console.log(err);
		}
	}

}


module.exports = ExecuteOperation;
const main = require('../product_cycle/main');

console.log('after calling readFile');
