const fs = require('fs');
const ProductChain = require('../productChain');
const Recycler = require('../recycler/recycler');
const readFile = require('../entry_point/readData');
const Producer = require('../producer/producer');


class Consumer {
    constructor(readFile){
        this.readFile = readFile;
    }
    
    move(prop) {
        let output = `${prop} Product moved from Consumer to Recycler`;
        fs.appendFile('../../data/output-file.txt','\n' + output,(err) => {
            if(err) throw err;
            console.log(`${prop} Product processed from Consumer!`);
            return;
        });
        this.readFile.nextState(new Recycler(readFile));
        
    }
    
}


module.exports = Consumer;
