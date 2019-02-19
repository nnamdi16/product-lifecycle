const fs = require('fs');
const ProductChain = require('../productChain');
const Retailer = require('../retailer/retailer');
const readFile = require('../entry_point/readData');
const Consumer = require('../consumer/consumer');

class Producer {
    constructor(readFile) {
        this.readFile = readFile;
        
        
    }
    move(prop) {
        let output = `${prop} Product moved from Producer to Retailer`;
        //  console.log(readFile.product);
        fs.appendFile('../entry_point/output-file.txt','\n' + output,(err) => {
            if(err) throw err;
            console.log(`${prop} Product processed from Producer!`);
            return;
        });
        this.readFile.nextState(new Retailer(readFile));
        
    }
 
}

module.exports = Producer;
