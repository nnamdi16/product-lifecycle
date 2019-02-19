let fs = require('fs');
const ProductChain = require('../productChain');
const Producer = require('../producer/producer');
const ExecuteOperation = require('../../app');

class Recycler  {
    constructor(executeOperation) {
        this.executeOperation = executeOperation;
        // this.product = product;
        
    }
    move(prop) {
        let output = `${prop} Product moved from Recycler to Producer`;
        fs.appendFile('../../../data/output-file.txt','\n' + output,(err) => {
            if(err) throw err;
            console.log(`${prop} Product processed from Recycler!`);
            return;
        });
        // this.readFile.nextState(new Producer(readFile));
        
    }
    
}




module.exports = Recycler;
