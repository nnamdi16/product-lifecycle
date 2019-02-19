let fs = require('fs');
const ProductChain = require('../productChain');
const Producer = require('../producer/producer');
const readFile = require('../entry_point/readData');

class Recycler  {
    constructor(readFile) {
        this.readFile = readFile;
        // this.product = product;
        
    }
    move(prop) {
        let output = `${prop} Product moved from Recycler to Producer`;
        fs.appendFile('../entry_point/output-file.txt','\n' + output,(err) => {
            if(err) throw err;
            console.log(`${prop} Product processed from Recycler!`);
            return;
        });
        // this.readFile.nextState(new Producer(readFile));
        
    }
    
}




module.exports = Recycler;
