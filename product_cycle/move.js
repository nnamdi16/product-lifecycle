const fs = require('fs');

class ProcessFile {

    Run() {
        try {
            const data = fs.readFileSync('/Users/nnamdinwabuokei/Documents/Decagon/Institute/checkpoint/product-lifecycle/product_cycle/data/product-Input.txt', 'utf8');
            let array = data.toString().split("\n");
            for (let index = 0; index < array.length; index++) {
                let result = array[index].replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/\t+\r?\n|\r]/gm, ' ').replace(/ +/gm, ' ');
                 if(!result.match(/^\s*$/gm)){ 
                    let input = result.trim().split(' ');
                    // console.log(input);
                    for (let index = 0, len = array.length; index < len; index++) {
                        let product = (array[index].split(' '));
                        let prop = `${index} ${product[0]} ${product[1]}`;
                        let state = `${product[2]}`;
                        // console.log(product);
                        if(product.length === 3 && state !== '') {
                            const productChain = new main.ProductChain(state,prop);
                            productChain.start();
                           
                            
                        } else{
                            const productChain = new main.ProductChain('Producer',prop);
                            productChain.start();
        
                        }
                 }
                }

                // let stop = output.trim().split('\n');


                // output[index].trim().split('\n');
                // console.log(output);

            }
            // array.forEach((element) => {

            //             let input = (/^\s*$/gm).test(result);
            //             if(!input) fs.appendFileSync('./productFlow.txt',`${result}\n`);
            //         });
        } catch (err) {
            console.log(err);
        }
    }
}

const processFile = new ProcessFile();
processFile.Run();

module.exports = ProcessFile;