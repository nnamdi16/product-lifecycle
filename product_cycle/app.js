const ProductChain = require('../product_cycle/product_chain/productChain');
const fs = require('fs');
class ExecuteOperation {

    execute() {
        fs.readFile('/Users/nnamdinwabuokei/Documents/Decagon/Institute/checkpoint/product-lifecycle/product_cycle/product-Input.txt', 'utf-8', function (err, contents) {
            let productArray = [];
            if (err) throw err;
            let array = contents.toString().split("\n");
            // console.log(array);

             array.forEach(element => {
               let result = element.replace(/[&\/\\#,+()$~%.'":*?<>{}\t;]/gm, '').replace(/\s\s+/g,'').split(' ');
            //    return result;
                let len = result.length;
                    let prop = `${result[0]} ${result[1]}`;
                    let state = `${result[2]}`;
                    // console.log(`${result[0]} ${result[1]} ${result[2]}`);
                    if(len === 3) {
                        const productChain  = new ProductChain(prop, state);
                        productChain.start();
                    } else if (len === 2) {
                       const productChain = new ProductChain(prop, 'Producer');
                       productChain.start();
                    }
                // console.log(result);
            });
            // for (let i in array) {
            //     let reg = /[&\/\\#,+()$~%.'":*?<>{}\t]/g;
            //     let space = /\s\s+/g;
            //     let result = array[i].replace(reg, '').replace(space,'').split('');
            //     console.log(result);
            //     // let len = result.length;
            //     //     let prop = `${result[0]} ${result[1]}`;
            //     //     let state = `${result[2]}`;
            //     //     // console.log(`${result[0]} ${result[1]} ${result[2]}`);
            //     //     if(len === 3) {
            //     //         const productChain  = new ProductChain(prop, state);
            //     //         productChain.start();
            //     //     } else if (len === 2) {
            //     //        const productChain = new ProductChain(prop, 'Producer');
            //     //        productChain.start();
            //     //     }
            //     // if (!(reg.test(array[i])) && !(space.test(array[i]))) {
            //     //     let result = array[i].split(" ");
            //     //     productArray.push(result);
            //     //     let len = result.length;
            //     //     let prop = `${result[0]} ${result[1]}`;
            //     //     let state = `${result[2]}`;
            //     //     // console.log(`${result[0]} ${result[1]} ${result[2]}`);
            //     //     if(len === 3) {
            //     //         const productChain  = new ProductChain(prop, state);
            //     //         productChain.start();
            //     //     } else if (len === 2) {
            //     //        const productChain = new ProductChain(prop, 'Producer');
            //     //        productChain.start();
            //     //     }
            //     //     // console.log(productArray);
            //     // }
            //         // console.log(productArray);
                 
            // }
            
        });
        
    }
}
 const executeOperation = new ExecuteOperation();
 executeOperation.execute();

module.exports = ExecuteOperation;

console.log('after calling readFile');

// class Run {
//     start() {
//         fs.readFileSync('./product-Input.txt', 'utf8').split('\n').forEach(line => {
//             let data = line.replace(/[^\w\s]/gm, '').replace(/\s\s+/gm, ' ').split(' ');
//             // const len = data.length;
//             // if (len === 3) {
//             //     const factory = new Factory(data[0] + ' ' + data[1], data[2]);
//             //     factory.start();
//             // } else if (len == 2) {
//             //     const factory = new Factory(data[0] + ' ' + data[1], 'Product');
//             //     factory.start();
//             // }
//             console.log(data);
//         });
        
//     }
// }

// let run = new Run();
// run.start();