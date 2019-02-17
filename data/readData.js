const ProductChain = require('../product_chain/productChain');
let fs = require('fs');
class ReadFile {

    read() {
        fs.readFile('product-Input.txt', 'utf-8', function (err, contents) {
            let productArray = [];
            if (err) throw err;
            let array = contents.toString().split("\n");

            //  array.forEach(element => {
            //    let result = element.replace(/[&\/\\#,+()$~%.'":*?<>{}\t]/g, ' ').split(' ');
            // //    return result;
            //     console.log(result);
            // });
            for (let i in array) {
                let reg = /[&\/\\#,+()$~%.'":*?<>{}\t]/g;
                let space = /\s\s+/g;
                if (!(reg.test(array[i])) && !(space.test(array[i]))) {
                    let result = array[i].split(" ");
                    productArray.push(result);
                    let len = result.length;
                    // console.log(`${result[0]} ${result[1]}`);
                    if(len === 3) {
                        const productChain  = new ProductChain(`${result[0]} ${result[1]}, ${result[2]}`);
                        productChain.start();
                    } else if (len === 2) {
                       const productChain = new ProductChain(`${result[0]} ${result[1]}, Producer`);
                       productChain.start();
                    }
                    // console.log(productArray);
                }
                    // console.log(productArray);
                 
            }
            
        });
        
    }
}
 const readFile = new ReadFile();
 readFile.read();

module.exports = ReadFile;

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