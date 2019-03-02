
const fs = require('fs');
class ExecuteOperation {

    execute() {
        try {
            const data = fs.readFileSync('/Users/nnamdinwabuokei/Documents/Decagon/Institute/checkpoint/product-lifecycle/product_cycle/data/productFlow.txt','utf8');
            let array = data.trim().split('\n');
            for (let index = 0, len = array.length; index < len; index++) {
                let product = (array[index].split(' '));
                let prop = `${index} ${product[0]} ${product[1]}`;
                let state = `${product[2]}`;
                if(product.length === 3) {
                    const productChain = new main.ProductChain(state,prop);
                    productChain.start();
                   
                    
                } else{
                    const productChain = new main.ProductChain('Producer',prop);
                    productChain.start();

                    
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

